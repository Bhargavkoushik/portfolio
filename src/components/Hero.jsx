import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const headline = "Hello, My Name is Bhargav Koushik Mogalapalli.";
  const [typedHeadline, setTypedHeadline] = useState("");
  const [isProfileImageLoaded, setIsProfileImageLoaded] = useState(true);
  const profileImageSrc = "/images/profile.jpeg";

  useEffect(() => {
    let index = 0;
    const intervalId = window.setInterval(() => {
      index += 1;
      setTypedHeadline(headline.slice(0, index));

      if (index >= headline.length) {
        window.clearInterval(intervalId);
      }
    }, 45);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative h-screen flex items-center px-6 md:px-20 overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto w-full max-w-6xl py-20 md:py-24"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm tracking-wide text-cyan-300">Welcome to my portfolio</p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 text-4xl font-semibold leading-tight text-slate-50 md:text-6xl"
            >
              {typedHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200/90"
            >
              I build AI/ML systems that transform data into actionable insights for
              real-world applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300"
              >
                See My Work
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-200/60 px-7 py-3 font-semibold text-cyan-100 transition duration-300 hover:scale-105 hover:bg-cyan-100/10"
              >
                See Resume
              </a>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -left-5 top-8 h-12 w-12 rounded-xl bg-cyan-400/70 blur-[1px]"
            />

            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-cyan-300/70 bg-white/5 p-3 shadow-[0_0_45px_rgba(56,189,248,0.35)]">
              {isProfileImageLoaded ? (
                <img
                  src={profileImageSrc}
                  alt="Bhargav Koushik Mogalapalli"
                  className="h-full w-full rounded-full object-cover"
                  onError={() => setIsProfileImageLoaded(false)}
                />
              ) : (
                <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_35%_25%,#d9f5ff_0%,#85b6d8_35%,#274a72_100%)]" />
              )}
              <div className="absolute inset-x-0 bottom-10 mx-auto w-max rounded-full border border-white/20 bg-slate-900/55 px-4 py-1 text-xs tracking-widest text-cyan-100">
                AI / ML ENGINEER
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
