const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-28 py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-cyan-200/20 bg-white/5 p-8 text-center shadow-[0_0_40px_rgba(56,189,248,0.16)] backdrop-blur-sm md:p-12">
          <h2 className="mb-6 text-4xl font-semibold text-cyan-200">Let's Work Together</h2>

          <p className="mb-10 text-slate-300">
            Have a project idea or opportunity? Let's build something impactful.
          </p>

          <a
            href="mailto:mogalapallikoushik@gmail.com"
            className="inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Send Email
          </a>

          <p className="mt-6 text-sm text-slate-400">or reach out via LinkedIn</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
