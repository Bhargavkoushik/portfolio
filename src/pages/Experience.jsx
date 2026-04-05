import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import MomentumDotsBackground from '../components/MomentumDotsBackground'
import FollowRail from '../components/FollowRail'
import Experience from '../components/Experience'
import ScrollUpButton from '../components/ScrollUpButton'

function ExperiencePage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#030816] to-[#072043]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.16),transparent_45%)]" />
        <div className="absolute inset-0 bg-black/35" />
        <MomentumDotsBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(109,40,217,0.16),transparent_40%)]" />
      </div>
      <Navbar />
      <FollowRail />
      <ScrollUpButton showAfterId="experience" />
      <main className="py-16 sm:py-20">
        <Experience showAll={true} />
      </main>
      <Contact />
    </div>
  )
}

export default ExperiencePage
