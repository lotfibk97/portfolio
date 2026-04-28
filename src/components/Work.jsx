import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageViewer from "react-simple-image-viewer";
import { HiArrowUpRight } from "react-icons/hi2";

// Reum (current)
import reumDecisions from "../assets/reum/dark-decisions.png";
import reumInsights from "../assets/reum/dark-insights.png";
import reumStrategy from "../assets/reum/dark-strategy.png";
import reumLearning from "../assets/reum/dark-learning.png";
import reumProfile from "../assets/reum/dark-businessprofile.png";
import reumWorkspace from "../assets/reum/dark-workspace.png";
import reumDashboard from "../assets/reum/dark-dashboard.png";

// Andre.ai
import andreHome from "../assets/andre/home.png";
import andreHomeFull from "../assets/andre/home-full.png";
import andreAbout from "../assets/andre/about.png";
import andrePlans from "../assets/andre/plans.png";

// ZeroHour Convergence
import zhDashboard from "../assets/zerohour/dashboard.png";
import zhSignal from "../assets/zerohour/layer-signal.png";
import zhCorrelation from "../assets/zerohour/layer-correlation.png";
import zhExposure from "../assets/zerohour/layer-exposure.png";
import zhDecision from "../assets/zerohour/layer-decision.png";
import zhLogin from "../assets/zerohour/login.png";

// Existing assets
import monadim from "../assets/monadim-hero.png";
import monadim2 from "../assets/monadim2.jpg";
import monadim3 from "../assets/monadim3.jpg";
import monadim4 from "../assets/monadim4.jpg";
import monadim5 from "../assets/monadim5.jpg";
import monadim6 from "../assets/monadim6.jpg";
import monadim7 from "../assets/monadim7.jpg";
import monadim10 from "../assets/monadim10.png";
import monadim11 from "../assets/monadim11.png";
import monadim12 from "../assets/monadim12.png";
import monadim14 from "../assets/monadim14.png";

import mouachir from "../assets/mouachir-hero.png";
import mouachir1 from "../assets/mouachir1.png";
import mouachir2 from "../assets/mouachir2.png";
import mouachir3 from "../assets/mouachir3.png";
import mouachir4 from "../assets/mouachir4.jpg";
import mouachir5 from "../assets/mouachir5.jpg";

import smarth from "../assets/smarth-hero.png";
import smarth1 from "../assets/smarth1.png";
import smarth2 from "../assets/smarth2.png";
import smarth3 from "../assets/smarth3.png";

import bliss from "../assets/bliss.png";
import bliss1 from "../assets/bliss1.png";
import bliss2 from "../assets/bliss2.png";
import bliss3 from "../assets/bliss3.png";
import bliss4 from "../assets/bliss4.png";
import bliss5 from "../assets/bliss5.png";
import bliss6 from "../assets/bliss6.png";

import cpulse from "../assets/cpulse.png";
import cpulse1 from "../assets/cpulse1.png";
import cpulse2 from "../assets/cpulse2.png";
import cpulse3 from "../assets/cpulse3.png";
import cpulse4 from "../assets/cpulse4.png";
import cpulse5 from "../assets/cpulse5.png";
import cpulse6 from "../assets/cpulse6.png";

const projects = [
  {
    id: "hadin",
    title: "Hadin Financial Management AI",
    role: "Senior Engineer · 2024 — present",
    tagline: "Liquid-glass decision intelligence platform",
    description:
      "AI decision platform for executives — agentic insights, strategy boards, traffic-light criticality and a custom Apple-Liquid-Glass design system. Next.js 15 · TypeScript · Tailwind v4 · agentic LLM pipelines.",
    tags: ["Next.js", "TypeScript", "AI Agents", "Liquid Glass UI"],
    accent: "from-accent via-accent-soft to-accent-deep",
    span: "lg:col-span-6",
    thumbnail: reumDecisions,
    images: [
      reumDecisions,
      reumInsights,
      reumStrategy,
      reumLearning,
      reumProfile,
      reumWorkspace,
      reumDashboard,
    ],
    featured: true,
  },
  {
    id: "zerohour",
    title: "ZeroHour Convergence",
    role: "Architect & Lead Engineer · 2025",
    tagline: "Pre-impact intelligence through signal correlation",
    description:
      "Executive-grade decision platform that correlates independent global signals across legal, financial, reputational and third-party domains to surface exposure windows before impact. Layered intelligence architecture with state-machine driven scenarios.",
    tags: ["Node.js", "Express", "State Machine", "Decision Intelligence"],
    accent: "from-accent via-accent-soft to-white/30",
    span: "lg:col-span-6",
    thumbnail: zhDashboard,
    images: [zhDashboard, zhSignal, zhCorrelation, zhExposure, zhDecision, zhLogin],
    featured: true,
  },
  {
    id: "andre",
    title: "Andre.ai",
    role: "Software Engineer · 2023 — 2024",
    tagline: "AI-powered survey analyst",
    description:
      "Turns customer survey data into actionable insights and synthesis slides in under 15 minutes. Backend automation pipelines, data analysis, and chart generation engine.",
    tags: ["Python", "AI/ML", "Data Pipelines", "Shiny"],
    accent: "from-gold via-accent-soft to-accent",
    span: "lg:col-span-6",
    thumbnail: andreHome,
    images: [andreHome, andreHomeFull, andreAbout, andrePlans],
    featured: true,
  },
  {
    id: "monadim",
    title: "Monadim ERP",
    role: "Lead Engineer",
    tagline: "Full-suite SaaS ERP",
    description:
      "Designed and built modules of a multi-tenant SaaS ERP — accounting, HR, inventory, billing — using Django and DRF.",
    tags: ["Django", "DRF", "PostgreSQL", "SaaS"],
    accent: "from-good to-accent-soft",
    span: "lg:col-span-2",
    thumbnail: monadim,
    images: [
      monadim,
      monadim2,
      monadim3,
      monadim4,
      monadim5,
      monadim6,
      monadim7,
      monadim10,
      monadim11,
      monadim12,
      monadim14,
    ],
  },
  {
    id: "mouachir",
    title: "Mouachir",
    role: "Lead Architect",
    tagline: "Government real-estate platform",
    description:
      "Real-estate transaction & indexing platform for a UAE government client — over 1M users on production.",
    tags: ["Python", "Django", "Government", "Scale"],
    accent: "from-gold to-gold-soft",
    span: "lg:col-span-2",
    thumbnail: mouachir,
    images: [mouachir, mouachir1, mouachir2, mouachir3, mouachir4, mouachir5],
  },
  {
    id: "smarth",
    title: "Smart-H Health",
    role: "Lead Engineer",
    tagline: "Healthcare records system",
    description:
      "End-to-end electronic health record solution with patient management, prescriptions, and reporting.",
    tags: ["Django", "Healthcare", "EHR"],
    accent: "from-accent-soft to-accent-deep",
    span: "lg:col-span-2",
    thumbnail: smarth,
    images: [smarth, smarth1, smarth2, smarth3],
  },
  {
    id: "bliss",
    title: "Bliss",
    role: "Full-Stack Engineer",
    tagline: "Wellness booking app",
    description:
      "Modern wellness and booking experience with payment flows, scheduling and reviews.",
    tags: ["React", "Django", "Stripe"],
    accent: "from-bad to-accent",
    span: "lg:col-span-3",
    thumbnail: bliss,
    images: [bliss, bliss1, bliss2, bliss3, bliss4, bliss5, bliss6],
  },
  {
    id: "cpulse",
    title: "Crypto Pulse",
    role: "Full-Stack Engineer",
    tagline: "Real-time crypto dashboard",
    description:
      "Live crypto market dashboard with watchlists, alerts, and portfolio analytics.",
    tags: ["React", "WebSockets", "FinTech"],
    accent: "from-gold to-bad",
    span: "lg:col-span-3",
    thumbnail: cpulse,
    images: [cpulse, cpulse1, cpulse2, cpulse3, cpulse4, cpulse5, cpulse6],
  },
];

const Work = () => {
  const [viewer, setViewer] = useState({ open: false, images: [], index: 0 });

  const open = (images, index = 0) =>
    setViewer({ open: true, images, index });
  const close = () => setViewer({ open: false, images: [], index: 0 });

  return (
    <section id="work" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="pill mb-5">Selected work</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">Things I've </span>
              <span className="gradient-text">shipped</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 leading-relaxed">
            From AI products and ERP suites to government platforms serving
            millions. Click any project to view the gallery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          {projects.map((p, i) => {
            const isFeatured = p.featured;
            const reverse = isFeatured && i % 2 === 1;
            return (
              <motion.button
                key={p.id}
                type="button"
                onClick={() => open(p.images)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className={`group text-left relative overflow-hidden rounded-3xl glass-strong transition-all duration-500 hover:-translate-y-1 ${
                  p.span || "lg:col-span-3"
                }`}
              >
                {/* Accent halo */}
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 pointer-events-none`}
                />

                {isFeatured ? (
                  <div
                    className={`relative grid lg:grid-cols-[1.4fr_1fr] ${
                      reverse ? "lg:[&>:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative h-64 sm:h-80 lg:h-[460px] overflow-hidden">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent lg:bg-gradient-to-r ${
                          reverse
                            ? "lg:from-transparent lg:via-ink-950/20 lg:to-ink-950/80"
                            : "lg:from-transparent lg:via-ink-950/10 lg:to-ink-950/70"
                        }`}
                      />
                      <span className="absolute top-4 left-4 pill pill-accent">
                        Featured
                      </span>
                    </div>

                    <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="text-[11px] uppercase tracking-widest text-accent-soft mb-3 font-medium">
                        {p.role}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-2 tracking-tight leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-accent-glow text-base mb-5 font-medium">
                        {p.tagline}
                      </p>
                      <p className="text-white/70 text-sm lg:text-[15px] leading-relaxed mb-6">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full glass text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        <HiArrowUpRight />
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative h-72 lg:h-80 overflow-hidden">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/10" />
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                      <span className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full glass text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        <HiArrowUpRight />
                      </span>
                    </div>

                    <div className="relative p-6 lg:p-7">
                      <div className="text-[11px] uppercase tracking-widest text-accent-soft mb-2 font-medium">
                        {p.role}
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-1.5 tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4 font-medium">
                        {p.tagline}
                      </p>
                      <p className="text-white/70 text-sm leading-relaxed mb-5">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.button>
            );
          })}
        </div>

        {viewer.open && (
          <ImageViewer
            src={viewer.images}
            currentIndex={viewer.index}
            onClose={close}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(4,8,17,0.92)",
              backdropFilter: "blur(20px)",
              zIndex: 100,
            }}
            closeOnClickOutside
          />
        )}
      </div>
    </section>
  );
};

export default Work;
