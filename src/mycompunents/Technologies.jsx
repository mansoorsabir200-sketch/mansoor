
"use client";

import { Card } from "@/components/ui/card";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

const technologies = [
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
    level: "Advanced",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
    level: "Intermediate",
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
    level: "Intermediate",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-white",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
    level: "Intermediate",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    level: "Learning",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-800 dark:text-white",
    level: "Learning",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    level: "Learning",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    level: "Learning",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
    level: "Intermediate",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-gray-900 dark:text-white",
    level: "Intermediate",
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold mb-3">
            MY SKILLS
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Technologies & Tools
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            responsive, and user-friendly web applications.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <Card
                key={tech.name}
                className="group flex flex-col items-center justify-center gap-4 p-7 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Icon
                  className={`text-5xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                />

                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {tech.name}
                </h3>

                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {tech.level}
                </span>
              </Card>
            );
          })}

        </div>
      </div>
    </section>
  );
}
