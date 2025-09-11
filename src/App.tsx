import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // 시스템 다크모드 감지
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // 다크모드 클래스 적용
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen bg-apple-light dark:bg-apple-dark transition-colors duration-500`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      {/* 스크롤 진행바 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-apple-blue to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />
    </div>
  )
}

export default App