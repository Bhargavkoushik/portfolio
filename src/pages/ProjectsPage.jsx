import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import MomentumDotsBackground from '../components/MomentumDotsBackground'
import FollowRail from '../components/FollowRail'
import ScrollUpButton from '../components/ScrollUpButton'

function ProjectsPage() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#030816] to-[#072043]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.16),transparent_45%)]" />
        <div className="absolute inset-0 bg-black/35" />
        <MomentumDotsBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(109,40,217,0.16),transparent_40%)]" />
      </div>

      <button
        onClick={() => navigate('/')}
        aria-label="Back to Home"
        className="fixed left-4 top-4 z-30 rounded-full border border-cyan-200/40 bg-slate-900/60 px-4 py-2 text-cyan-100 backdrop-blur-sm transition hover:scale-105 hover:border-cyan-300/70 hover:bg-cyan-200/10"
      >
        ← Back
      </button>

      <Navbar />
      <FollowRail />
      <ScrollUpButton showAfterId="projects" />

      <main className="py-16 sm:py-20">
        <Projects showAll={true} />
      </main>
      <Contact />
    </div>
  )
}

export default ProjectsPage
