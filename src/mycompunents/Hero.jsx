
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Code2, Download, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-50 px-5 py-20 dark:bg-gray-950 md:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* LEFT SIDE - CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          {/* Welcome Badge */}
        

          {/* Heading */}
          <div>
            <p className="mb-3 text-xl font-medium text-gray-600 dark:text-gray-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
              Mansoor
              <span className=" text-blue-600">
                Sabir.
              </span>
            </h1>

            <h2 className="mt-5 flex items-center gap-2 text-xl font-semibold text-gray-700 dark:text-gray-300 md:text-2xl">
              <Code2 className="text-blue-600" size={25} />
              Full-Stack Web Developer
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
            I build modern, responsive, and user-friendly web
            applications. I enjoy solving real-world problems
            through technology and turning creative ideas into
            meaningful digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              View My Work
              <ArrowUpRight
                size={20}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-800 transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-white dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 pt-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Find me on:
            </span>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 transition hover:scale-125 hover:text-blue-600 dark:text-gray-400"
            >
              <FaGithub size={25} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 transition hover:scale-125 hover:text-blue-600 dark:text-gray-400"
            >
              <FaLinkedin size={25} />
            </a>
          </div>

          {/* Technology Stack */}

        </motion.div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">

            {/* Decorative Background */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-xl" />

            {/* Image Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-[350px] w-[300px] overflow-hidden rounded-[2rem] border-4 border-white bg-gray-200 shadow-2xl dark:border-gray-800 dark:bg-gray-900 sm:h-[420px] sm:w-[360px]"
            >
              <img
                src="/sabir.png"
                alt="Mansoor Sabir - Full-Stack Web Developer"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Floating Developer Badge */}
            <div className="absolute  -bottom-7 flex items-center gap-3 rounded-xl border border-gray-200/45 bg-white/35 p-2 shadow-xl dark:border-gray-800 dark:bg-gray-900">
            

               <Link
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-gray-700  px-4 py-2 font-semibold text-white  "
            >
              Donload Reusme
              <Download
                size={20}
                className="transition  group-hover:translate-y-1"
              />
            </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
