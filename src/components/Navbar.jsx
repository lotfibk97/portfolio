import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-glass"
            : "glass"
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-deep text-white font-bold shadow-glow">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent" />
            <span className="relative">L</span>
          </span>
          <span className="hidden sm:block font-semibold tracking-tight text-white">
            Lotfi Bokhari
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm"
        >
          Let's talk
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full glass-thin text-white"
        >
          {open ? <AiOutlineClose size={18} /> : <AiOutlineMenu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-3 mx-auto max-w-6xl glass-strong rounded-3xl p-3"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
