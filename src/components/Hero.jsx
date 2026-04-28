import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { HiOutlineSparkles } from "react-icons/hi2";
import profilepic from "../assets/profilepic6.jpeg";
import resume from "../assets/resume.pdf";

const stats = [
  { v: "8+", l: "Years building" },
  { v: "20+", l: "Projects shipped" },
  { v: "1M+", l: "Users served" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden"
    >
      {/* Soft ambient glow — barely tinted, like room light through frosted glass */}
      <div className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-white/[0.04] blur-[140px] animate-blob-slow pointer-events-none" />
      <div className="absolute top-1/4 -right-24 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[160px] animate-blob-fast pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-white/[0.03] blur-[120px] animate-blob-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pill pill-accent mb-7"
          >
            <HiOutlineSparkles className="h-3.5 w-3.5" />
            Available for senior full-stack roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="block text-white/90">Hi, I'm Lotfi.</span>
            <span className="block gradient-text">
              <TypeAnimation
                sequence={[
                  "Full-Stack Engineer",
                  1800,
                  "Python · Django Architect",
                  1800,
                  "AI Product Builder",
                  1800,
                  "React · TypeScript Dev",
                  1800,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-xl"
          >
            I design and ship production systems end-to-end — from AI products
            and ERP platforms to government apps serving millions. 8+ years
            turning gnarly problems into clean, fast software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href={resume} className="btn-primary" download>
              Download résumé
              <AiOutlineArrowDown />
            </a>
            <a href="#work" className="btn-ghost">
              See my work
            </a>
            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://www.linkedin.com/in/lotfibokhari/"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full glass-thin text-white/80 hover:text-white hover:bg-white/10 transition-all"
              >
                <AiFillLinkedin size={20} />
              </a>
              <a
                href="https://github.com/lotfibk97"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full glass-thin text-white/80 hover:text-white hover:bg-white/10 transition-all"
              >
                <AiFillGithub size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-4 max-w-md"
          >
            {stats.map((s) => (
              <div
                key={s.l}
                className="glass rounded-2xl px-4 py-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {s.v}
                </div>
                <div className="mt-1 text-xs text-white/55">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-accent/12 to-white/5 blur-3xl opacity-60 animate-blob-slow" />
            <div
              className="relative w-[280px] sm:w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.18), 0 30px 70px -16px rgba(0,0,0,0.65), 0 12px 28px -10px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={profilepic}
                alt="Lotfi Bokhari"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3">
              <div className="text-xs text-white/55">Based in</div>
              <div className="text-sm font-semibold text-white">
                Dubai · Remote-friendly
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-good shadow-[0_0_12px_#34c759]" />
              <span className="text-sm font-medium text-white">
                Open to work
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
