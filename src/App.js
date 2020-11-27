import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ProjectsList from './component/projects/ProjectsList'
// import { AppContainer } from './materials/material-ui.module';
import Navbar from './component/UI/Navbar'
import Skills from './component/skills/Skills';
import Self from './component/UI/Self';
import Intro from './component/UI/Intro';
import Footer from './component/UI/Footer';
import MenuDrawer from './component/UI/MenuDrawer';
import { useStyles } from './materials/material-ui.module'

function App() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const menuClicker = () => {
    console.log(open)
    setOpen(!open)
  }


  return (
    <div className="App">
      <MenuDrawer
        openState={open}
        toggle={menuClicker}
      />
      <main>
        <Navbar menuHandler={() => menuClicker()} />
        <Intro />
        <Self />
        <Skills />
        <ProjectsList />
        <Footer />
      </main>
    </div>
  );
}

export default App;
