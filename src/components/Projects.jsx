import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Real-Time Credit Risk Monitoring System",
    description:
      "Context-aware ML system with explainable AI, real-time financial data integration, and decision engine for actionable insights.",
    tech: ["Python", "FastAPI", "XGBoost", "SHAP"],
    link: "https://github.com/Bhargavkoushik/AI-Powered-Credit-Risk-Prediction-Project",
    featured: true,
  },
  {
    title: "AlertHub – Disaster Preparedness System",
    description:
      "SIH hackathon project to improve disaster awareness using interactive modules, real-time alerts, and virtual drills.",
    tech: ["React", "Flask", "ML"],
    link: "https://github.com/Bhargavkoushik/alerthub",
    featured: true,
  },
  {
    title: "Osteoporosis Prediction System",
    description:
      "ML-based healthcare application that predicts osteoporosis risk and provides preventive insights.",
    tech: ["Python", "ML", "Flask"],
    link: "https://github.com/lalli2701/osteocare-",
  },
  {
    title: "Campus Rise Platform",
    description:
      "Web platform for college-based student interaction and engagement.",
    tech: ["React"],
    link: "https://github.com/Bhargavkoushik/campus-Rise",
  },
];

const Projects = ({ showAll = false }) => {
  const navigate = useNavigate();

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="scroll-mt-28 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-4xl font-semibold text-cyan-200">
          {showAll ? "All Projects" : "Featured Projects"}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-cyan-200/20 bg-white/5 p-6 shadow-[0_0_32px_rgba(56,189,248,0.14)] backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-cyan-300/55"
            >
              {project.featured && (
                <span className="mb-2 inline-block rounded border border-cyan-300/35 bg-cyan-300/15 px-2 py-1 text-xs text-cyan-100">
                  Featured
                </span>
              )}

              <h3 className="text-xl font-semibold text-cyan-100">{project.title}</h3>

              <p className="mt-3 text-slate-300">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="rounded border border-cyan-200/25 bg-slate-900/35 px-3 py-1 text-sm text-cyan-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-cyan-300 hover:text-cyan-200 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/projects")}
              className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-200 hover:shadow-[0_0_22px_rgba(103,232,249,0.45)]"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
