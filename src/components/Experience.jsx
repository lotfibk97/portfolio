import React from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineMapPin } from "react-icons/hi2";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const roles = [
  {
    company: "Self-Employed",
    title: "Senior Software Engineer",
    period: "2024 — Present",
    location: "Remote · UAE",
    bullets: [
      "Architected and shipped a decision-intelligence platform for executives — agentic insights, strategy boards, and a bespoke Apple Liquid-Glass design system.",
      "Built end-to-end LLM pipelines: structured outputs, evals, and agentic workflows over a Next.js 15 + TypeScript stack.",
      "Led front-end design language and component library used across the product suite.",
    ],
    tags: ["Next.js", "TypeScript", "LLMs", "Tailwind v4"],
  },
  {
    company: "Andre.ai",
    title: "Software Engineer",
    period: "2023 — 2024",
    location: "Remote",
    bullets: [
      "Built data-analysis automation that turns raw survey tables into investor-ready insights and synthesis slides in <15 minutes.",
      "Designed the chart-generation engine that auto-selects meaningful visuals from variable combinations.",
      "Cut analyst time-on-task by 60% through pipeline automation.",
    ],
    tags: ["Python", "AI/ML", "Data", "ChatGPT"],
  },
  {
    company: "Kalvad",
    title: "Software Engineer",
    period: "2023 — 2024",
    location: "Dubai, UAE",
    bullets: [
      "Developed and maintained software used by senior government officials — high-trust, audit-grade systems.",
      "Owned core modules of a +1M-user government app: performance, reliability and rollout.",
    ],
    tags: ["Django", "Government", "Scale", "Security"],
  },
  {
    company: "IDC Technologies",
    title: "Software Engineer",
    period: "2021 — 2023",
    location: "Dubai, UAE",
    bullets: [
      "Lead architect for a real-estate sector client — Python platform serving transactions and indexing.",
      "Lead architect for a school management SaaS built on Django + DRF.",
    ],
    tags: ["Django", "DRF", "Architecture"],
  },
  {
    company: "ELCS Research",
    title: "Software Engineer",
    period: "2017 — 2021",
    location: "Algeria",
    bullets: [
      "Designed and developed modules for Monadim — a multi-tenant SaaS ERP on Django.",
      "Led design, development, and rollout of a hospital information system for a major client.",
      "Designed and shipped a blockchain supply-chain system from scratch.",
      "Built a radiology information system end-to-end.",
    ],
    tags: ["Django", "ERP", "Healthcare", "Blockchain"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge variant="accent" className="mb-5">Career · shadcn/ui</Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">8+ years, </span>
            <span className="gradient-text">five companies</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/65 leading-relaxed">
            Startups, government, AI labs — building systems people actually
            depend on.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0 hidden sm:block" />

          <div className="space-y-5">
            {roles.map((r, i) => (
              <motion.div
                key={r.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative sm:pl-16"
              >
                <div className="hidden sm:grid absolute left-0 top-6 h-10 w-10 place-items-center rounded-full border border-white/10 bg-card/80 backdrop-blur-xl shadow-glow">
                  <HiOutlineBriefcase className="h-4 w-4 text-accent-soft" />
                </div>

                <Card className="transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-card/80">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white tracking-tight">
                          {r.title}{" "}
                          <span className="text-accent-soft">@ {r.company}</span>
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm text-white/50 mt-1.5">
                          <HiOutlineMapPin className="h-3.5 w-3.5" />
                          {r.location}
                        </div>
                      </div>
                      <Badge variant="outline" className="self-start md:self-auto font-mono">
                        {r.period}
                      </Badge>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {r.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-white/70 text-sm leading-relaxed flex gap-3"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {r.tags.map((t) => (
                        <Badge key={t} variant="default">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
