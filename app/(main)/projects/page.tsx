const projectLists = [
  {
    id: 1,
    title: "E-Commerce Platform",
    technologies: ["React", "Node.js", "MongoDB"],
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/project1.jpg",
    link: "https://example.com/project1",
    githubLink: "https://github.com/username/project1",
  },
  {
    id: 2,
    title: "Social Media App",
    technologies: ["React Native", "Expo", "MongoDB"],
    description:
      "Mobile-first social networking application with real-time messaging, posts, and user interactions.",
    image: "/project2.jpg",
    link: "https://example.com/project2",
    githubLink: "https://github.com/username/project2",
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
              className="w-full max-w-md shadow-md overflow-hidden hover:border-primary border rounded-2xl shadow-indigo-500/50 shadow-xl/30"
            >
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
