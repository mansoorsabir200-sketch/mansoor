
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-950/90">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold dark:text-white">
          M Sabir<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Theme and Mobile Menu */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-gray-200 px-5 py-5 dark:border-gray-800 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
}
