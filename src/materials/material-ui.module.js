import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const drawerWidth = 600


export const theme = createMuiTheme(
  {
    palette: {
      primary: {
        light: '#757ce8',
        main: '#00D1B2',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#b8f2e6',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  }
)




export const useStyles = makeStyles(theme => ({
  root: {

  },
  title: {
    flexGrow: 1
  },
  media: {

  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  linkButton: {

  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "black"
  },

  chip: {
    margin: 5
  },
  chipColor: {
    color: "#00D1B2"
  }
}))


// function MyNavBar({ title = "Portfolio" }) {
//   const classes = useStyles()

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <a className="button is-primary is-inverted is-outlined is-rounded">联系我</a>
//           {/* <Button><FaGithub /></Button> */}
//           {/* <Button><FaLinkedin /></Button> */}
//         </Toolbar>
//       </AppBar>
//     </div>

//   )

// }




// export function NavBar() {
//   return (
//     <ThemeProvider theme={theme}>
//       <MyNavBar />
//     </ThemeProvider>
//   )
// }



export function AppContainer({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {{ children }}
    </ThemeProvider>

  )
}