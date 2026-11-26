
"use client";

import { motion } from "motion/react";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const posts = [
  {
    title: "JavaScript Fundamentals",
    description:
      "Learn the basic concepts of JavaScript, including variables, functions, arrays, and objects.",
    category: "JavaScript",
    date: "Programming",
    image: "/it.jpg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Getting Started with React",
    description:
      "Discover React components, props, state, and how to build interactive user interfaces.",
    category: "React",
    date: "Frontend",
    image: "/study.jpg",
    link: "https://react.dev/learn",
  },
  {
    title: "Introduction to Next.js",
    description:
      "Explore Next.js and learn how to create modern web applications using React.",
    category: "Next.js",
    date: "Web Development",
    image: "/css.jpg",
    link: "https://nextjs.org/learn",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-white px-6 py-20 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            My Articles
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Blog & Posts
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
            Sharing knowledge, programming tutorials, and
            experiences from my web development journey.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  {post.category}
                </span>

                <h3 className="mb-3 mt-4 text-xl font-bold">
                  {post.title}
                </h3>

                <p className="mb-6 min-h-20 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>

                <div className="mb-5 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <CalendarDays size={15} />
                  {post.date}
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                >
                  Read More
                  <ArrowUpRight size={18} />
                </a>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
