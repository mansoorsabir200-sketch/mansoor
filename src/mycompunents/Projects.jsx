
"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "pahrmacy System",
    description:
      "A modern and responsive portfolio website to introduce myself, showcase my skills, and share my work.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "Motion","postgresql","type script"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Digital chash ladger",
    description:
      "A task management application concept designed to help users organize their daily activities.",
    image: "/projects/task-app.png",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yourusername/task-app",
    demo: "https://example.com",
  },
  {
    title: "Learning Platform",
    description:
      "An educational website concept where students can explore learning resources and improve their skills.",
    image: "/projects/learning-platform.png",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/yourusername/learning-platform",
    demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 px-6 py-20 text-gray-900 dark:bg-gray-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            My Recent Work
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            My Projects
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
            Here are some projects and ideas that represent
            my learning journey and development skills.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-5 min-h-20 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5 border-t border-gray-200 pt-5 dark:border-gray-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold transition hover:text-blue-600"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Live Demo
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
