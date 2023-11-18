import './App.css'
import Header from './components/header'
import Projects from './components/projects'
import Skills from './components/skills'
import About from './components/about'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer'

function App() {

  return (
    <>
     <Router>
      <Header />
     </Router>
     <About /> 
     <Skills />

     <Router>
      <Projects />
     </Router>

    <Router>
     <Footer />
    </Router>
    </>
  )
}

export default App
