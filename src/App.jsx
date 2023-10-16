import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Project } from './components/Project'




function App() {

  return (
    <>
      <Header />
      <div className='max-w-[1460px] mx-auto'>
        <Hero />
        <About />
        <Skills />
        <Project />
      </div>
    </>
  )
}

export default App
