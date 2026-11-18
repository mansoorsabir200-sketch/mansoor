
"use client";

import { motion } from "motion/react";
import {
  Code2,
  GraduationCap,
  Lightbulb,
  Rocket,
  MapPin,
  Mail,
} from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Drizzle ORM",
  "PostgreSQL",
  "Git & GitHub",
  "Node.js",
  "TypeScript",
];

export default function About() {
  return (
    <section
      id="about"
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
            Get to know me
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            About Me
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
            A little introduction about who I am, what I do,
            and what I want to achieve.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              <Code2 size={18} />
              Frontend / Full-Stack Web Developer
            </div>

            <h3 className="mb-5 text-2xl font-bold md:text-3xl">
              Building Digital Experiences Through Code
            </h3>

            <p className="mb-5 leading-8 text-gray-600 dark:text-gray-400">
              I am Mansoor Sabir, a passionate Full-Stack Web
              Developer from Afghanistan. I enjoy solving
              real-world problems through technology and
              building digital experiences that make people's
              lives easier.
            </p>

            <p className="mb-6 leading-8 text-gray-600 dark:text-gray-400">
              My focus is on creating modern, responsive, and
              user-friendly websites and web applications.
              I am continuously learning, improving my skills,
              and gaining practical experience by building
              projects with modern web technologies.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <span>Afghanistan</span>
              </div>

              <a
                href="mailto:mansoorsabir200@gmail.com"
                className="flex items-center gap-3 transition hover:text-blue-600"
              >
                <Mail className="text-blue-600" size={20} />
                <span>mansoorsabir200@gmail.com</span>
              </a>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 sm:grid-cols-2"
          >

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <Code2 className="mb-4 text-blue-600" size={32} />
              <h4 className="mb-2 text-lg font-bold">
                Web Development
              </h4>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                Building modern websites and web applications.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <GraduationCap className="mb-4 text-blue-600" size={32} />
              <h4 className="mb-2 text-lg font-bold">
                Teaching
              </h4>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                Sharing knowledge and helping others learn technology.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <Lightbulb className="mb-4 text-blue-600" size={32} />
              <h4 className="mb-2 text-lg font-bold">
                Creative Thinking
              </h4>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                Finding useful and creative solutions to problems.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <Rocket className="mb-4 text-blue-600" size={32} />
              <h4 className="mb-2 text-lg font-bold">
                Continuous Growth
              </h4>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                Learning new technologies and building practical projects.
              </p>
            </div>

          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="mb-7 text-center text-2xl font-bold">
            My Technologies & Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
