import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Intro from "./components/intro"
import Projects from "./components/projects"

function App() {

  return (
    <>
      <Intro />
      <Projects />
    </>
  )
}

export default App
