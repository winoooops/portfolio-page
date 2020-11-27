import React from 'react'
import Button from '@material-ui/core/Button'
import { MdSend } from 'react-icons/md'
import { FaGithub, FaReact, } from 'react-icons/fa'
import { AiOutlineWechat, AiOutlineWeibo, AiOutlineLinkedin } from 'react-icons/ai'
import { SiMaterialUi, SiBulma } from 'react-icons/si'

export default function Footer() {
  return (
    <div>
      <section style={{ marginBottom: -40 }}>
        <div className="container is-narrow">
          <div className="box">
            <div className="columns level">
              <div className="column level-item">
                <h3 className="title">让我加入你的团队吧</h3>
              </div>
              <div className="column level-item">
                {/* <Button varient="outlined" size="large">发送邀请</Button> */}
                <button className="button is-outlined is-primary is-rounded">发送邀请</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <div>
              <h1 className="title">Coding and Growing.</h1>
              <div className="social-icons" style={{ margin: 100 }}>
                <a className="button is-primary is-inverted is-outlined" style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: 30 }}>
                  < span >
                    <AiOutlineWechat size="large"></AiOutlineWechat>
                  </span>
                </a>
                <a className="button is-primary is-inverted is-outlined" style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: 30 }}>
                  <span>
                    <FaGithub size="large"></FaGithub>
                  </span>
                </a>
                <a className="button is-primary is-inverted is-outlined" style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: 30 }}>
                  <span>
                    <AiOutlineWeibo size="large" />
                  </span>
                </a>
                <a className="button is-primary is-inverted is-outlined" style={{ width: "100px", height: "100px", borderRadius: "50%", marginRight: 30 }}>
                  <span>
                    <AiOutlineLinkedin size="large" />
                  </span>
                </a>
              </div>

              <div className="libraries" style={{ margin: 20 }}>
                <p className="subtitle">
                  <span style={{ marginRight: 10 }}>Made with</span>
                  <span style={{ marginRight: 10, width: 30, height: 30 }}><FaReact style={{ width: 50, height: 50 }} /></span>
                  <span style={{ marginRight: 10 }}><SiMaterialUi style={{ width: 50, height: 50 }} /></span>
                  <span style={{ marginRight: 10 }}><SiBulma style={{ width: 50, height: 50 }} /></span>
                </p>
              </div>
              <div className="copyrights">
                <p className="subtitle">Handcrafted by 王炜</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div >


  )
}