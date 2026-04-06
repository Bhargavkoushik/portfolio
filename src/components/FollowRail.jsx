const FollowRail = () => {
  return (
    <div className="fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex lg:right-6">
      <span className="[writing-mode:vertical-rl] text-xs tracking-[0.25em] text-cyan-100/80">FOLLOW ME</span>
      <a
        href="https://www.linkedin.com/in/bhargav-koushik10200504"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/80 bg-white/10 text-cyan-100 transition hover:bg-cyan-300/20"
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
        className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/80 bg-white/10 text-cyan-100 transition hover:bg-cyan-300/20"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.38.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
        </svg>
      </a>
    </div>
  );
};

export default FollowRail;
