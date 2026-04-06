import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import wolfMoon from "@/assets/wolf-moon.jpg";

const phases = [
  {
    phase: "Phase 1",
    title: "Whitepaper Release",
    items: ["Official whitepaper graphic released on April 4, 2026", "Core manifesto, legend, and tokenomics made public", "X-driven launch countdown intensified"],
    status: "complete",
  },
  {
    phase: "Phase 2",
    title: "Pump.fun Launch",
    items: ["Scheduled for April 20, 2026", "100% fair launch on Solana via Pump.fun", "Liquidity lock, LP burn, and renounced contract messaging"],
    status: "upcoming",
  },
  {
    phase: "Phase 3",
    title: "Post-Launch Push",
    items: ["Dominate the meme meta", "Grow the pack on strong community goals", "Plant the $WOS flag and chase massive success"],
    status: "future",
  },
  {
    phase: "Phase 4",
    title: "Long-Term Vision",
    items: ["Steady growth over short-lived hype", "Luxury, success, and ambitious upside for the pack", "No limits mentality across the movement"],
    status: "future",
  },
];

const Roadmap = () => (
  <Layout>
    <section className="px-0 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="ice-panel rounded-[2rem] p-8">
          <span className="status-live"><span className="status-live-dot" />Roadmap Active</span>
          <h1 className="mt-6 text-4xl font-black md:text-6xl">Launch first. Dominate after.</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-200/76">
            No detailed multi-phase corporate roadmap has been released. The official direction is simpler: whitepaper out, launch on April 20, 2026, then dominate the market through strong community growth and long-term vision.
          </p>
        </div>
        <div className="ice-panel overflow-hidden rounded-[2rem] p-3">
          <img src={wolfMoon} alt="Wolf under moonlight" className="h-full min-h-[360px] w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeading tag="Timeline" title="The public release path so far." />
        <div className="space-y-6">
          {phases.map((p, i) => (
            <motion.div key={p.phase} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} className="ice-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{p.phase}</p>
                  <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                </div>
                <span className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${p.status === "complete" ? "bg-sky-300/15 text-sky-100" : "bg-white/6 text-slate-200/72"}`}>
                  {p.status}
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-3 text-sm text-slate-200/78">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Roadmap;
