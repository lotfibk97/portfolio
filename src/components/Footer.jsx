import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 px-6 pb-10">
      <div className="max-w-6xl mx-auto glass rounded-3xl px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-deep text-white font-bold shadow-glow">
            L
          </span>
          <div>
            <div className="text-sm text-white font-medium">Lotfi Bokhari</div>
            <div className="text-xs text-white/50">
              © {year} · Built with React, Tailwind, and a lot of ☕
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-2xl text-white/60">
          <a
            href="https://www.linkedin.com/in/lotfibokhari/"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/lotfibk97"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
