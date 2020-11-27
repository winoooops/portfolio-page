import React from 'react'
import { AiOutlineWechat, AiOutlineWeibo, AiOutlineLinkedin } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

export default function Intro() {
  return (
    <section>
      <div className="container is-centered">
        <h1 className="title" style={{ margin: 100 }}>
          王炜
          </h1>
        <h2 className="subtitle">
          前端全栈开发者
        </h2>

        <div className="social-icons" style={{ marginBottom: 200 }}>
          <a className="button is-primary is-outlined" style={{ width: "80px", height: "80px", borderRadius: "50%", marginRight: 15 }}>
            < span >
              <AiOutlineWechat size="large"></AiOutlineWechat>
            </span>
          </a>
          <a className="button is-primary is-outlined" style={{ width: "80px", height: "80px", borderRadius: "50%", marginRight: 15 }}>
            <span>
              <FaGithub size="large"></FaGithub>
            </span>
          </a>
          <a className="button is-primary  is-outlined" style={{ width: "80px", height: "80px", borderRadius: "50%", marginRight: 15 }}>
            <span>
              <AiOutlineWeibo size="large" />
            </span>
          </a>
          <a className="button is-primary  is-outlined" style={{ width: "80px", height: "80px", borderRadius: "50%", marginRight: 15 }}>
            <span>
              <AiOutlineLinkedin size="large" />
            </span>
          </a>
        </div>


      </div>
      <img src="images/intro.svg"></img>
    </section>
  )
}