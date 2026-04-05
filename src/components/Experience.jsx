import { useNavigate } from "react-router-dom";

const experiences = [
  {
    title: "AI/ML Intern (Virtual)",
    subtitle: "Tata iQ x Geldium",
    year: "2025",
    featured: true,
    points: [
      "Built a credit delinquency prediction system using Logistic Regression, Decision Trees, and Neural Networks.",
      "Performed EDA on financial datasets to identify key risk indicators like payment delays and credit utilization.",
      "Achieved ~87% precision, optimizing high-risk classification performance.",
      "Applied Explainable AI (SHAP) to interpret model decisions for stakeholders.",
      "Designed evaluation strategy balancing accuracy, fairness, and interpretability.",
    ],
  },
  {
    title: "Open Source Contributor",
    subtitle: "GirlScript Summer of Code (GSSoC)",
    year: "2025",
    points: [
      "Contributed to an AlgoVisualizer project, improving algorithm visualization features.",
      "Worked with Git/GitHub workflows, pull requests, and collaborative development.",
      "Fixed bugs and enhanced data structure visualization usability.",
      "Gained hands-on experience in code reviews and team-based development.",
    ],
  },
  {
    title: "Hackathon Finalist - Prajwalan 2026 & VISION-X 2K26",
    subtitle: "Team: Cosmic Crushers",
    year: "2026",
    featured: true,
    points: [
      "Built OsteoCare+ (OsteoPredict), an AI-based osteoporosis risk prediction system under tight hackathon deadlines.",
      "Developed full pipeline: Flutter frontend + Flask backend + XGBoost model.",
      "V1 (Prajwalan 2026): Implemented core risk prediction model and workflow.",
      "V2 (VISION-X 2K26): Added SHAP explainability and hospital recommendation system.",
      "Enhanced decision-support and user experience features.",
      "Advanced to Final Round (Prajwalan 2026) and Grand Finale (VISION-X 2K26).",
    ],
  },
  {
    title: "Hackathon Finalist - Prajwalan 2025",
    subtitle: "Team: The Algo Pirates",
    year: "2025",
    points: [
      "Designed and presented a student-focused mobile banking application.",
      "Implemented spending alerts, savings goals, and financial awareness modules.",
      "Built using Android (Java + XML) with SQLite.",
      "Reached final round with a functional prototype.",
    ],
  },
];

const Experience = ({ showAll = false }) => {
  const navigate = useNavigate();

  const displayedExperiences = showAll
    ? experiences
    : experiences.filter((exp) => exp.featured);

  return (
    <section id="experience" className="scroll-mt-28 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-4xl font-semibold text-cyan-200">
          {showAll ? "All Experience" : "Featured Experience"}
        </h2>

        <div className="grid gap-8">
          {displayedExperiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl border border-cyan-200/20 bg-white/5 p-6 shadow-[0_0_32px_rgba(56,189,248,0.14)] backdrop-blur-sm transition duration-300 hover:border-cyan-300/55"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-100">{exp.title}</h3>
                  <p className="text-slate-300">{exp.subtitle}</p>
                </div>
                <span className="inline-block rounded border border-cyan-300/35 bg-cyan-300/15 px-3 py-1 text-sm text-cyan-100">
                  {exp.year}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-slate-300">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 text-cyan-300">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/experience")}
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              View All Experience
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
