import React from 'react'
import Drawer from "@material-ui/core/Drawer"
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme, useStyles } from '../../materials/material-ui.module'





export default function MenuDrawer({ openState, toggle = f => f }) {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        variant='persistent'
        anchor='right'
        open={openState}
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <a className="button is-primary is-outlined" onClick={() => toggle()}>
              <ChevronLeft />
            </a>
          </div>

          <Divider />
          <div className="About" style={{ margin: 20 }}>
            <h2 className="title" style={{ color: "#00D1B2" }}>关于我</h2>
            <h4 className="subtitle is-5" style={{ color: "white" }}>一枚热爱网页设计和学习新技术的开发者</h4>
          </div>

          {/* <div className="recent">
          <h2 className="title">近期动态</h2>
        </div> */}

          <div className="jobs" style={{ margin: 20 }}>
            <h2 className="title" style={{ color: "#00D1B2" }}>求职岗位</h2>
            <Chip
              className={classes.chip}
              color="primary"
              clickable
              label="前端开发工程师"
            />
            <Chip
              className={classes.chip}
              color="primary"
              clickable
              label="全栈开发工程师"
            />
            <Chip
              className={classes.chip}
              clickable
              label="iOS软件开发工程师"
              color="primary"
            />
          </div>

          <div className="contact" >
            <h2 className="title" style={{ color: "#00D1B2" }}>联系我</h2>
          </div>
        </div>
      </Drawer>
    </ThemeProvider>
  )
}