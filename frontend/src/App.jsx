import './App.css'

import Intro from "./components/intro"
import Projects from "./components/projects"
import Langs from "./components/langs"
import Contact from "./components/contact"
import RubiksCube from "./components/rubikscube"

function App() {

  return (
    <>
      <Intro />
      <Projects />
      <Langs />
      <Contact />
      {/* <RubiksCube /> */}
    </>
  )
}

export default App
