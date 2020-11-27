import React, { } from 'react'
import { useData } from '../../hooks/DataProvider'
import { FaDatabase, FaDev, FaReact, FaNodeJs } from 'react-icons/fa'

const renderSVG = (title) => {
  switch (title) {
    case "前端开发":
      return <FaReact size={32} />
    case "全栈开发":
      return <FaNodeJs size={32} />
    case "数据库":
      return <FaDatabase size={32} />
    case "开发工具":
      return <FaDev size={32} />
    default:
      console.error()
  }
}


const renderColumn = (skill, index) => {
  return (
    <div key={index} className="column">
      { renderSVG(skill.title)}
      <h4 className="subtitle">{skill.title}</h4>
      { skill.list.map((item, i) => <p key={i}>{item}</p>)}
    </div>
  )
}



export default function Skills() {
  const { skills } = useData()
  return (
    <section style={{ zIndex: 9, margin: -100 }}>
      <div className="container is-narrow" >
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              {skills.map((skill, i) => renderColumn(skill, i))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}