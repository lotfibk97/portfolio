import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || "someone"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:lotfibk97@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative glass-strong rounded-[2rem] overflow-hidden p-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-accent/8 to-transparent pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-0">
            <div className="p-8 lg:p-12 relative">
              <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="pill pill-accent mb-5">Let's build</div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Have a hard problem?{" "}
                  <span className="gradient-text">I'd love to hear it.</span>
                </h2>
                <p className="mt-6 text-white/65 leading-relaxed">
                  Whether it's an AI product, an ERP overhaul, or a brand-new
                  platform — I help teams ship the things they thought would
                  take twice as long.
                </p>

                <div className="mt-10 space-y-4">
                  <a
                    href="mailto:lotfibk97@gmail.com"
                    className="group flex items-center gap-4 glass rounded-2xl p-4 hover:-translate-y-0.5 transition-all"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl glass-thin">
                      <HiOutlineEnvelope className="h-5 w-5 text-accent-soft" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs text-white/50">Email</span>
                      <span className="block text-white font-medium">
                        lotfibk97@gmail.com
                      </span>
                    </span>
                  </a>
                  <div className="flex items-center gap-4 glass rounded-2xl p-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 border border-gold/30">
                      <HiOutlineMapPin className="h-5 w-5 text-gold-soft" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs text-white/50">Based in</span>
                      <span className="block text-white font-medium">
                        Dubai, UAE · Remote-friendly
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-3">
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
              </div>
            </div>

            <form
              onSubmit={submit}
              className="p-8 lg:p-12 relative lg:before:absolute lg:before:inset-y-8 lg:before:left-0 lg:before:w-px lg:before:bg-white/8"
            >
              <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
              <div className="relative space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/55 mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handle}
                    required
                    className="w-full rounded-2xl glass-thin px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:bg-white/[0.1] focus:shadow-glow-soft transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/55 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    required
                    className="w-full rounded-2xl glass-thin px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:bg-white/[0.1] focus:shadow-glow-soft transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/55 mb-2">
                    Project / message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    required
                    rows={5}
                    className="w-full rounded-2xl glass-thin px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:bg-white/[0.1] focus:shadow-glow-soft transition-all resize-none"
                    placeholder="Tell me about what you're building..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  {sent ? "Email opened" : "Send message"}
                  <HiOutlinePaperAirplane className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
