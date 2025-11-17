import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App
