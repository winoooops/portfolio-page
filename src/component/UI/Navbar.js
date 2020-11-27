import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { AppBar, Toolbar, IconButton, Avatar } from '@material-ui/core'
import { FiMoreHorizontal } from 'react-icons/fi'
import { theme, useStyles } from '../../materials/material-ui.module'


export default function Navbar({ menuHandler = f => f }) {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="navbar-brand">
          <a href="index.html"><Avatar src="images/cover.png" style={{ width: 80, height: 80 }} /></a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons ">
              <a className="button is-primary" onClick={() => menuHandler()}>
                <FiMoreHorizontal></FiMoreHorizontal>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  )

}
