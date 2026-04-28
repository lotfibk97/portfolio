import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCpuChip,
  HiOutlineCubeTransparent,
  HiOutlineUserGroup,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import aboutImg from "../assets/about4.jpeg";

const traits = [
  {
    icon: HiOutlineCubeTransparent,
    title: "End-to-end ownership",
    body: "From data model to deploy — I take products from blank canvas to production with full accountability.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "AI-native engineering",
    body: "Shipping LLM-powered features in production: agentic workflows, RAG pipelines, evals, structured outputs.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Stakeholder fluent",
    body: "Worked across startups and government — I translate fuzzy requirements into shippable specs.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Performance obsessed",
    body: "Caching, profiling, and async-first design baked in. I measure before I ship and after.",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="pill mx-auto mb-5">About</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">A senior engineer who </span>
            <span className="gradient-text">ships</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/65 leading-relaxed">
            Full-stack software engineer with 8+ years building robust systems
            for startups and enterprises. ERPs, CRMs, AI products, government
            platforms — I've shipped them all, end-to-end.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-white/6 via-accent/12 to-transparent blur-3xl pointer-events-none" />
            <div
              className="relative h-[440px] w-full rounded-3xl overflow-hidden"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.16), 0 30px 70px -16px rgba(0,0,0,0.65), 0 12px 28px -10px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={aboutImg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover grayscale-[0.2]"
              />
              <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-widest text-accent-soft mb-1">
                  What I do
                </div>
                <div className="text-white font-semibold">
                  Full-stack engineering, end-to-end
                </div>
                <div className="text-white/55 text-sm mt-1">
                  AI products · ERP platforms · Government systems · Liquid
                  glass UI
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {traits.map((t) => (
              <div
                key={t.title}
                className="glass rounded-3xl p-6 hover:bg-white/[0.09] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl glass-thin mb-4">
                  <t.icon className="h-5 w-5 text-accent-soft" />
                </div>
                <h3 className="text-white font-semibold mb-2">{t.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t.body}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
