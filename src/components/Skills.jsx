import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiDjango,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiOpenai,
  SiGraphql,
  SiNodedotjs,
  SiCelery,
  SiGit,
  SiFastapi,
} from "react-icons/si";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";

const groups = [
  {
    title: "Backend",
    items: [
      { icon: SiPython, label: "Python" },
      { icon: SiDjango, label: "Django / DRF" },
      { icon: SiFastapi, label: "FastAPI" },
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiCelery, label: "Celery" },
      { icon: SiGraphql, label: "GraphQL" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiReact, label: "React" },
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
    ],
  },
  {
    title: "AI & Data",
    items: [
      { icon: SiOpenai, label: "LLMs & Agents" },
      { icon: SiPython, label: "ML pipelines" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiRedis, label: "Redis" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { icon: SiDocker, label: "Docker" },
      { icon: SiAmazon, label: "AWS" },
      { icon: SiGit, label: "Git / CI/CD" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <Badge variant="accent" className="mb-5">Toolkit · shadcn/ui</Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">My </span>
            <span className="gradient-text">stack</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/65 leading-relaxed">
            Battle-tested technologies I reach for. Always learning what comes
            next.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Card className="h-full transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-card/80">
                <CardHeader className="pb-3">
                  <div className="text-[11px] uppercase tracking-widest text-accent-soft mb-1">
                    Stack
                  </div>
                  <CardTitle>{g.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {g.items.map((it) => (
                      <li
                        key={it.label}
                        className="flex items-center gap-3 text-white/80 text-sm"
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5">
                          <it.icon className="h-4 w-4 text-accent-soft" />
                        </span>
                        {it.label}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
