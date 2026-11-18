
"use client";

import { motion } from "motion/react";
import {
  MonitorSmartphone,
  Layout,
  Database,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    description:
      "Building modern, responsive, and user-friendly websites for individuals and businesses.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Creating attractive and interactive user interfaces using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Learning and building backend systems using Node.js, PostgreSQL, and Drizzle ORM.",
  },
  {
    icon: GraduationCap,
    title: "Computer Education",
    description:
      "Sharing computer knowledge and helping students develop their digital skills.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            What I Do
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            My Services
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
            I enjoy using technology and creativity to build
            useful digital solutions and share knowledge.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-7 transition-colors duration-300 hover:border-blue-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-400">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mb-6 min-h-24 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Explore
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
