import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Callout } from './components/Callout/Callout'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Callout />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
