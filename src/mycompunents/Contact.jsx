"use client";

import { motion } from "motion/react";

import {
  Mail,
  MapPin,
  Send,
  Phone,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

import { FaTiktok } from "react-icons/fa6"; 

export default function Contact() {
 const contactInfo = [
  {
    icon: <Mail size={22} />,
    title: "Email",
    value: "mansoorsabir@gmail.com",
    link: "mailto:mansoorsabir@gmail.com",
  },
  {
    icon: <Phone size={22} />,
    title: "Phone",
    value: "0700267728",
    link: "tel:+93700267728",
  },
  {
    icon: <FaWhatsapp size={22} />,
    title: "WhatsApp",
    value: "+93745353429",
    link: "https://wa.me/93745353429",
  },
  {
    icon: <MapPin size={22} />,
    title: "Location",
    value: "Afghanistan",
    link: null,
  },
];
const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    link: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    link: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Facebook",
    icon: <FaFacebook size={20} />,
    link: "https://facebook.com/yourusername",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={20} />,
    link: "https://wa.me/93745353429",
  },
  {
    name: "TikTok",
    icon: <FaTiktok size={20} />,
    link: "https://www.tiktok.com/@yourusername",
  },
];

  return (
    <section
      id="contact"
      className="bg-gray-50 px-5 py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-semibold text-blue-600">
            CONTACT ME
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-400">
            Have a project idea, a question, or an opportunity?
            Feel free to contact me. I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h3>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              I'm always interested in discussing new projects,
              creative ideas, and opportunities to learn and grow.
            </p>

            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-950">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Follow Me
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="rounded-lg border border-gray-200 p-3 text-gray-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-800 dark:text-gray-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const data = new FormData(form);

              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");

              const subject = encodeURIComponent(
                `Portfolio Contact from ${name}`
              );

              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
              );

              window.location.href =
                `mailto:mansoorsabir200@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Send Me a Message
            </h3>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none focus:border-blue-600 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none focus:border-blue-600 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Message
              </label>

              <textarea
                name="message"
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none focus:border-blue-600 dark:border-gray-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
