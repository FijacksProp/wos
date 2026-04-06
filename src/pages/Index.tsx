import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Droplets, Users, Lock, ArrowRight, Sparkles, Radar, Trophy, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import wolfSnow from "@/assets/wolf-snow.jpg";
import wolfForest from "@/assets/wolf-forest.jpg";
import wolfPack from "@/assets/wolf-pack.jpg";
import wolfConstellation from "@/assets/wolf-constellation.jpg";

const pillars = [
  { icon: Shield, title: "Anti-Rug Culture", desc: "The project is explicitly framed as a response to repeated rugs by greedy devs and weak meme launches." },
  { icon: Droplets, title: "Pure Alpha Flow", desc: "0% buy tax and 0% sell tax keep the tokenomics simple, aggressive, and easy to repeat." },
  { icon: Users, title: "Pack Ownership", desc: "No team wallets, no hidden allocations, no VC round. The pack is the center of the story." },
  { icon: Lock, title: "Fair Launch Mechanics", desc: "100% fair launch on Pump.fun with locked liquidity, LP burn, and renounced control at launch." },
];

const trustSignals = [
  { label: "Whitepaper", value: "4 APR, '26" },
  { label: "Launch", value: "20 APR, '26" },
  { label: "Chain", value: "Solana" },
  { label: "Ticker", value: "$WOS" },
];

const storyCards = [
  { icon: Radar, title: "Heroic Adventure", text: "WOS is positioned as a purposeful heroic adventure, not just another short-lived Pump.fun meme." },
  { icon: Trophy, title: "Market Dominance", text: "The core message is consistent: this wolf does not follow the meta, it is here to dominate it." },
  { icon: CheckCircle2, title: "Long-Term Vision", text: "The team repeatedly pushes long-term building, steady growth, strong community goals, and nothing less than success." },
];

const entryFlow = [
  { step: "01", title: "Read the signal", desc: "Start with the released whitepaper and official posts to understand the project narrative and token mechanics." },
  { step: "02", title: "Track the launch", desc: "Watch @wolfonsol007 for the scheduled April 20, 2026 Pump.fun launch and official launch-day updates." },
  { step: "03", title: "Run with the pack", desc: "The project is built around holders as a movement, not just traders chasing a quick candle." },
];

const Index = () => (
  <Layout>
    <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-12">
      <div className="mx-auto grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="status-live"><span className="status-live-dot" />Pre-Launch</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-100/70 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
              Heroic Adventure on Solana
            </span>
          </div>
          <h1 className="max-w-5xl text-[2.7rem] font-black leading-[0.92] sm:text-6xl lg:text-8xl">
            The Alpha
            <br />
            <span className="gradient-gold-text">That Eats the Charts.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200/78 sm:text-lg md:text-xl">
            Wolf on Solana ($WOS) is positioned as a purposeful, community-driven movement built for market dominance in the Solana meme meta. Not another weak copycat wolf. Not another short-lived Pump.fun meme. The leader of the pack.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="https://x.com/wolfonsol007" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full gradient-gold px-6 text-sm font-bold text-slate-950 shadow-gold transition-all hover:opacity-90 sm:px-8 sm:text-base">
              Follow @wolfonsol007
            </a>
            <Link to="/whitepaper" className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-foreground transition-all hover:border-sky-200/40 hover:bg-white/10 hover:text-gold sm:px-8 sm:text-base">
              Read Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4 sm:gap-4">
            {trustSignals.map((item) => (
              <div key={item.label} className="ice-panel rounded-2xl p-4 sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-300/65 sm:text-xs">{item.label}</p>
                <p className="mt-2 text-xl font-bold text-foreground sm:text-2xl break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-200/25 via-transparent to-blue-400/10 blur-3xl" />
          <div className="ice-panel relative overflow-hidden rounded-[2rem] p-2 sm:p-3 shadow-[0_30px_120px_rgba(8,18,40,0.42)]">
            <div className="relative overflow-hidden rounded-[1.35rem] sm:rounded-[1.55rem]">
              <img src={wolfSnow} alt="Wolf standing in snow" className="h-[420px] w-full object-cover sm:h-[520px]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,28,0.05),rgba(4,12,28,0.24)_50%,rgba(4,12,28,0.92)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
                <div className="ice-panel rounded-[1.2rem] p-3 sm:rounded-[1.5rem] sm:p-5">
                  <div className="mb-3 flex items-start justify-between gap-3 sm:mb-4 sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gold sm:text-xs sm:tracking-[0.22em]">Official Narrative</p>
                      <h2 className="mt-2 text-lg font-bold leading-tight text-white sm:text-2xl">Not a mascot. Not a sidekick.</h2>
                    </div>
                    <Sparkles className="mt-1 h-5 w-5 flex-shrink-0 text-gold sm:h-8 sm:w-8" />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-3">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300/65 sm:text-xs sm:tracking-[0.18em]">Legend</p>
                      <p className="mt-1.5 text-sm font-semibold text-white sm:mt-2">Leader of the pack</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-3">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300/65 sm:text-xs sm:tracking-[0.18em]">Launch</p>
                      <p className="mt-1.5 text-sm font-semibold text-white sm:mt-2">Pump.fun on 4/20</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-3">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300/65 sm:text-xs sm:tracking-[0.18em]">Ethos</p>
                      <p className="mt-1.5 text-sm font-semibold text-white sm:mt-2">No rugs. No weak howls.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-white/10 bg-white/[0.03] py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 lg:grid-cols-3">
          {storyCards.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} className="ice-panel rounded-3xl p-5 sm:p-6">
              <item.icon className="h-7 w-7 text-gold sm:h-8 sm:w-8" />
              <h3 className="mt-3 text-lg font-bold sm:mt-4 sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/72">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Project Thesis" title="More than another wolf meme." description="The official messaging keeps returning to the same idea: this is a movement with purpose, built to restore trust, dominate the market, and run for the long term." />
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] sm:gap-6">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {pillars.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} className="ice-panel rounded-3xl p-5 sm:p-6 min-w-0">
                <item.icon className="mb-3 h-7 w-7 text-gold sm:mb-4 sm:h-8 sm:w-8" />
                <h3 className="text-base font-bold sm:text-lg break-words">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/72">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="ice-panel overflow-hidden rounded-[2rem] p-2 sm:p-3">
            <img src={wolfForest} alt="Wolf in a forest" className="h-full min-h-[280px] w-full rounded-[1.3rem] object-cover sm:min-h-[320px] sm:rounded-[1.4rem]" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 sm:py-24">
      <div className="container mx-auto grid gap-6 px-4 lg:grid-cols-[0.95fr_1.05fr] sm:gap-8">
        <div className="ice-panel rounded-[2rem] p-2 sm:p-3">
          <img src={wolfPack} alt="Wolf pack together" className="h-full min-h-[300px] w-full rounded-[1.3rem] object-cover sm:min-h-[360px] sm:rounded-[1.5rem]" />
        </div>
        <div className="ice-panel rounded-[2rem] p-6 sm:p-8">
          <SectionHeading tag="The Movement" title="The pack does not follow trends. It sets them." />
          <div className="space-y-4 text-sm leading-relaxed text-slate-200/78 sm:space-y-5 sm:text-base">
            <p>
              The official posts frame Wolf on Solana as a direct answer to the chaos of Pump.fun and the flood of copycat dogs and wolves. WOS is positioned as the apex, the project that hunts while others chase.
            </p>
            <p>
              The promise is not just a chart move. It is a community movement built around long-term vision, strong fundamentals, and the belief that early holders become part of a success story with real conviction behind it.
            </p>
            <p className="font-semibold text-white">
              This is the wolf that does not need a narrative. It is the narrative.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] sm:gap-8">
          <div className="ice-panel rounded-[2rem] p-6 sm:p-8">
            <SectionHeading tag="How To Follow" title="Track the official launch path." />
            <div className="space-y-4">
              {entryFlow.map((item, i) => (
                <motion.div key={item.step} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="rounded-2xl border border-white/10 bg-slate-950/25 p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold sm:text-xs sm:tracking-[0.24em]">{item.step}</p>
                  <h3 className="mt-2 text-lg font-bold sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/72">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="ice-panel rounded-[2rem] p-2 sm:p-3 shadow-gold">
            <div className="relative overflow-hidden rounded-[1.3rem] sm:rounded-[1.5rem]">
              <img src={wolfConstellation} alt="Stylized wolf art" className="h-full min-h-[360px] w-full object-cover sm:min-h-[420px]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,24,0.18),rgba(7,12,24,0.6)_55%,rgba(7,12,24,0.88))]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-center sm:p-8">
                <span className="status-live"><span className="status-live-dot" />Pack Active</span>
                <h2 className="mt-5 text-3xl font-black md:text-5xl sm:mt-6 sm:text-4xl">
                  Born on Solana.
                  <br />
                  <span className="gradient-gold-text">Forged in degen fire.</span>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-100/78 sm:mt-4 sm:text-base md:text-lg">
                  Official messaging positions the project for dominance in the meme meta, strong community growth, and nothing less than success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
