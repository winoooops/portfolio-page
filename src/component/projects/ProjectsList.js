import React, { } from 'react'
import Project from './Project'
import Box from '@material-ui/core/Box'
import { useData } from '../../hooks/DataProvider'
import { Divider } from '@material-ui/core'

export default function ProjectsList() {
  const { projects } = useData()
  const length = projects.length
  // console.log(useData())
  return (
    <section style={{ margin: 200 }}>
      <div className="container is-centered">
        <h1 className="title">前端全栈项目</h1>
        <Box display="flex" flexDirection="row" justifyContent="space-around" style={{ margin: 50 }}>
          {projects.map((item, i) => (<div key={i}>
            <Project card={item} />
            {/* <Divider orientation="vertical" flexItem /> */}
          </div>
          ))}
        </Box>
      </div>
      <a className="button is-rounded  is-primary is-outlined">GitHub上查看更多</a>
    </section>
  )
}