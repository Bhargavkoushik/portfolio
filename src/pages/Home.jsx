import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import MomentumDotsBackground from "../components/MomentumDotsBackground";
import FollowRail from "../components/FollowRail";
import ScrollUpButton from "../components/ScrollUpButton";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#030816] to-[#072043]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.16),transparent_45%)]" />
        <div className="absolute inset-0 bg-black/30" />
        <MomentumDotsBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(109,40,217,0.16),transparent_40%)]" />
      </div>

      <Navbar />
      <FollowRail />
      <ScrollUpButton showAfterId="about" />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Projects showAll={false} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Experience showAll={false} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
