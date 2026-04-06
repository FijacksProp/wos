import { motion } from "framer-motion";
import { ShieldCheck, Lock, Ban, Coins } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import wolfSnow from "@/assets/wolf-snow.jpg";

const stats = [
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Buy Tax", value: "0%" },
  { label: "Sell Tax", value: "0%" },
  { label: "Launch Type", value: "100% Fair Launch" },
  { label: "Liquidity", value: "Locked + LP Burned" },
  { label: "Contract", value: "Renounced" },
];

const reasons = [
  { icon: Ban, title: "0% / 0% Taxes", text: "Officially described as pure alpha flow with no buy or sell tax friction." },
  { icon: Coins, title: "Pump.fun Fair Launch", text: "The full supply is framed as a public launch with no presale, no VC allocation, and no private round." },
  { icon: Lock, title: "No Rugs, Ever", text: "Liquidity is intended to be locked and LP burned at launch as a direct anti-rug signal." },
  { icon: ShieldCheck, title: "No Team Wallets", text: "No hidden allocations, no excuses, and no insider-controlled stash are part of the core pitch." },
];

const Tokenomics = () => (
  <Layout>
    <section className="px-0 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="ice-panel rounded-[2rem] p-8">
          <span className="status-live"><span className="status-live-dot" />Tokenomics</span>
          <h1 className="mt-6 text-4xl font-black md:text-6xl">Pure alpha flow. Fair launch rules.</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-200/76">
            The released tokenomics are built for maximum clarity: 1 billion total supply, 0% buy and sell tax, locked liquidity, LP burn, renounced contract, and no team wallets. The project presents this as the anti-rug foundation of the whole movement.
          </p>
        </div>
        <div className="ice-panel overflow-hidden rounded-[2rem] p-3">
          <img src={wolfSnow} alt="Wolf portrait" className="h-full min-h-[340px] w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Breakdown" title="The official token panel." description="These are the core figures released publicly ahead of launch." />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="ice-panel rounded-3xl p-6 text-center">
              <p className="text-sm text-slate-300/65">{s.label}</p>
              <p className="mt-2 text-2xl font-bold text-gold">{s.value}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-300/70">
          The official token identity across the site is <span className="text-white font-semibold">$WOS</span>.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Security Signals" title="The anti-rug case, stated directly." />
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((e, i) => (
            <motion.div key={e.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} className="ice-panel rounded-3xl p-8">
              <e.icon className="mb-4 h-8 w-8 text-gold" />
              <h3 className="text-xl font-bold">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/72">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Tokenomics;

