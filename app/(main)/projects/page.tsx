import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import EduSmart from "../../../public/EduSmart.png"
import ToDoApp from "../../../public/todo.png"
import Image from "next/image";

const projectLists = [
  {
    id: 1,
    title: "Education Platform",
    technologies: ["React", "Node.js", "MongoDB"],
    description:
      "Full-stack education platform solution with course integration, inventory management, and admin dashboard.",
    image: EduSmart,
    link: "https://edu-smart-xi.vercel.app",
    githubLink: "https://github.com/DixonKH/edu-smart",
  },
  {
    id: 2,
    title: "ToDo App",
    technologies: ["Nextjs", "Prisma", "MongoDB"],
    description:
      "Simple ToDo app with task management, and priority CRUD operations. It also resonsive for mobile devices.",
    image: ToDoApp,
    link: "https://todo-app-five-rho-39.vercel.app",
    githubLink: "https://github.com/DixonKH/todoApp",
  },
  {
    id: 3,
    title: "Project Management Tool",
    technologies: ["Vue.js", "Firebase"],
    description:
      "Comprehensive project management tool with team collaboration, task tracking, and analytics.",
    image: "/project3.jpg",
    link: "https://example.com/project3",
    githubLink: "https://github.com/username/project3",
  },
];

export default function Projects() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-35 gap-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-sm font-bold text-primary text-center uppercase">
          Portfolio
        </div>
        <div className="text-5xl font-bold text-center">Featured Projects</div>
        <div className="dark:text-gray-400 text-lg mt-2 text-center">
          Showcasing my best work and achievements
        </div>
      </div>
      <div className="w-full flex flex-wrap lg:flex-nowrap gap-8 flex-row justify-center lg:justify-between items-center">
        {projectLists.map((project) => {
          return (
            <div
              key={project.id}
              className="w-full max-w-md shadow-md cursor-pointer overflow-hidden hover:border-primary border rounded-2xl shadow-indigo-500/50 shadow-xl/30"
            >
              <Image
                className="w-full h-48 object-cover hover:scale-105 transition-all duration-300"
                src={project.image}
                alt={project.title}
                width={364}
                height={192}
              />
              <div className="p-6">
                <div className="mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-20">
                  {project.description}
                </p>
                <div className="w-full flex justify-between items-center">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 font-semibold"
                  >
                    GitHub Repo <FaGithub className="inline ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
