import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";

const skillsList = [
  {
    category: "Frontend",
    icon: <FaReact size={35} />,
    skills: [
      { name: "HTML & CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    icon: <FaNode size={36} />,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Nest.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Rest API", level: "Expert" },
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase size={35} />,
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
    ],
  },
  {
    category: "Mobile",
    icon: <FaMobileScreen size={35} />,
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "Expo", level: "Advanced" },
      { name: "IOS & Android", level: "Intermediate" },
      { name: "PWA", level: "Intermediate" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <FaTools size={32} />,
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Beginner" },
      { name: "CI/CD", level: "Intermediate" },
    ],
  },
  {
    category: "Design & UX",
    icon: <IoColorPaletteSharp size={35} />,
    skills: [
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "UX/UI", level: "Intermediate" },
      { name: "Resoponsive Design", level: "Expert" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillsList.map((s, i) => {
        return (
          <div
            key={i}
            className="flex flex-col md:min-w-1/3 hover:scale-102 transition-all justify-center cursor-pointer items-start gap-3 hover:border-primary border rounded-2xl shadow-indigo-500/50 shadow-xl/30 p-6"
          >
            <div className="flex justify-center w-16 text-primary-foreground items-center py-3 border border-primary rounded-2xl shadow-indigo-500/50 shadow-xl/40 bg-primary">
              {s.icon}
            </div>
            <div className="text-2xl font-bold mt-2">{s.category}</div>
            <div className="w-full flex justify-between items-center text-lg">
              <div>{s.skills[0].name}</div>
              <div className="text-primary font-bold">{s.skills[0].level}</div>
            </div>
            <div className="w-full flex justify-between items-center text-lg">
              <div>{s.skills[1].name}</div>
              <div className="text-primary font-bold">{s.skills[1].level}</div>
            </div>
            <div className="w-full flex justify-between items-center text-lg">
              <div>{s.skills[2].name}</div>
              <div className="text-primary font-bold">{s.skills[2].level}</div>
            </div>
            <div className="w-full flex justify-between items-center text-lg">
              <div>{s.skills[3].name}</div>
              <div className="text-primary font-bold">{s.skills[3].level}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
