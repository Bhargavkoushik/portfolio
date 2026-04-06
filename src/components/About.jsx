const About = () => {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16 md:scroll-mt-28 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-cyan-200/20 bg-white/5 p-5 shadow-[0_0_40px_rgba(56,189,248,0.16)] backdrop-blur-sm sm:p-7 md:p-10">
          <h2 className="text-2xl font-semibold text-cyan-200 sm:text-3xl">About</h2>

          <p className="mt-4 leading-relaxed text-slate-200/90">
            I am an AI/ML undergraduate focused on building end-to-end
            intelligent systems, not just training models. I have developed
            solutions like a credit delinquency prediction system (~87%
            precision) and OsteoCare+, an AI-based healthcare application for
            early osteoporosis risk assessment with explainability and decision
            support.
            <br />
            <br />
            I work across the full AI pipeline -- from data analysis and model
            development (XGBoost, Logistic Regression) to backend deployment
            using Flask APIs and frontend integration with Flutter applications.
            My focus is on building systems that are interpretable, usable, and
            aligned with real-world needs, not just accurate.
            <br />
            <br />
            I also have hands-on experience with MERN stack (CRUD applications
            and REST APIs), along with working knowledge of React Native and R,
            enabling me to understand both web and cross-platform application
            development.
            <br />
            <br />
            Currently, I am exploring AI agents and LLM-based systems, while
            strengthening my problem-solving through DSA and system-level
            thinking. My goal is to build scalable AI solutions that solve real
            user problems, not just academic tasks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
