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
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-10 pt-20 text-white sm:px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto w-full max-w-6xl py-8 sm:py-12 md:py-20"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs tracking-wide text-cyan-300 sm:text-sm">Welcome to my portfolio</p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-6xl"
            >
              {typedHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-200/90 sm:text-lg"
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

            <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-cyan-300/70 bg-white/5 p-3 shadow-[0_0_45px_rgba(56,189,248,0.35)] sm:rounded-full">
              {isProfileImageLoaded ? (
                <img
                  src={profileImageSrc}
                  alt="Bhargav Koushik Mogalapalli"
                  className="h-full w-full rounded-2xl object-cover sm:rounded-full"
                  onError={() => setIsProfileImageLoaded(false)}
                />
              ) : (
                <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_35%_25%,#d9f5ff_0%,#85b6d8_35%,#274a72_100%)] sm:rounded-full" />
              )}
              <div className="absolute inset-x-0 bottom-6 mx-auto w-max rounded-full border border-white/20 bg-slate-900/55 px-3 py-1 text-[10px] tracking-[0.2em] text-cyan-100 sm:bottom-10 sm:px-4 sm:text-xs sm:tracking-widest">
                AI / ML ENGINEER
              </div>
            </div>

            <div className="mt-5 lg:hidden">
              <p className="mb-2 text-center text-xs tracking-[0.2em] text-cyan-100/85">FOLLOW ME</p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/bhargav-koushik10200504"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200/80 bg-white/10 text-cyan-100 transition hover:bg-cyan-300/20"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.03 2.03 0 1 0 5.3 7.06 2.03 2.03 0 0 0 5.25 3zM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.66V8.5h3.24v1.57h.05c.45-.85 1.56-1.74 3.2-1.74 3.43 0 4.06 2.26 4.06 5.2V20z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Bhargavkoushik"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200/80 bg-white/10 text-cyan-100 transition hover:bg-cyan-300/20"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.38.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
