import { FaReact } from "react-icons/fa";
import { SiPython, SiJavascript, SiPandas, SiFlask, SiTailwindcss, SiGithub, SiVercel } from "react-icons/si";

const skillsData = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "SQL" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn" },
      { name: "XGBoost" },
      { name: "Deep Learning" },
      { name: "NLP" },
    ],
  },
  {
    title: "Data & Backend",
    skills: [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "SQLite" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-28 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-4xl font-semibold text-cyan-200">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl border border-cyan-200/20 bg-white/5 p-6 shadow-[0_0_32px_rgba(56,189,248,0.14)] backdrop-blur-sm transition duration-300 hover:border-cyan-300/50"
            >
              <h3 className="mb-4 text-xl font-semibold text-cyan-100">{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500/20 hover:scale-105 transition"
                  >
                    {skill.icon && <span className="text-xl text-cyan-400">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
