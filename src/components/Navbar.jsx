import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('')
  const [isNavVisible, setIsNavVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId)
      return
    }

    navigate('/')
    window.setTimeout(() => {
      scrollToSection(sectionId)
    }, 260)
  }

  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname === '/projects') {
        setActiveSection('projects')
        return
      }

      if (location.pathname === '/experience') {
        setActiveSection('experience')
        return
      }

      setActiveSection('')
      return
    }

    const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact']
    const offset = 140

    const updateActiveSection = () => {
      let current = ''

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue

        const rect = section.getBoundingClientRect()
        if (rect.top <= offset && rect.bottom >= offset) {
          current = id
          break
        }
      }

      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [location.pathname])

  useEffect(() => {
    const handleNavVisibility = () => {
      const currentScrollY = window.scrollY
      const lastScrollY = lastScrollYRef.current
      const delta = currentScrollY - lastScrollY

      if (currentScrollY <= 12) {
        setIsNavVisible(true)
      } else if (delta > 0 && currentScrollY > 90) {
        setIsNavVisible(false)
      } else if (delta < 0) {
        setIsNavVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleNavVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleNavVisibility)
    }
  }, [])

  useEffect(() => {
    setIsNavVisible(true)
    lastScrollYRef.current = window.scrollY
  }, [location.pathname])

  const linkBase =
    'rounded-lg px-3 py-1.5 text-[1.05rem] font-medium text-slate-100 transition-colors hover:bg-white/10 hover:text-cyan-200'

  const activeLink = 'bg-cyan-300/20 text-cyan-200'

  return (
    <header
      className={`sticky top-0 z-30 border-b border-cyan-200/10 bg-slate-950/55 backdrop-blur-md transition-transform duration-300 ease-out ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-3 py-1.5 md:px-6 md:py-3">
        <div className="flex items-center gap-3 text-cyan-100">
          <div className="h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.75)]" />
          <span className="text-[2rem] font-semibold leading-none tracking-wide">Koushik&apos;s Portfolio</span>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-white/20 bg-slate-900/55 px-2 py-1 backdrop-blur-md md:gap-2 md:px-3">
          <button
            onClick={() => handleNavClick('about')}
            className={`${linkBase} ${activeSection === 'about' ? activeLink : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('skills')}
            className={`${linkBase} ${activeSection === 'skills' ? activeLink : ''}`}
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className={`${linkBase} ${activeSection === 'projects' ? activeLink : ''}`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('experience')}
            className={`${linkBase} ${activeSection === 'experience' ? activeLink : ''}`}
          >
            Experience
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`${linkBase} ${activeSection === 'contact' ? activeLink : ''}`}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
