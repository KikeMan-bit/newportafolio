import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Project } from './components/Project'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'


import "./App.css";



function App() {

  return (
    <>
      <Header />
      <div className='max-w-[1460px] mx-auto'>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact/>
        <Footer />
      </div>
    </>
  )
}

export default App
