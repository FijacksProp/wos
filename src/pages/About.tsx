import { motion } from "framer-motion";
import { Target, Eye, Heart, Crown } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import wolfForest from "@/assets/wolf-forest.jpg";
import wolfPack from "@/assets/wolf-pack.jpg";

const values = [
  { icon: Target, title: "Mission", text: "Restore trust in crypto after repeated rugs and build a community movement with long-term purpose on Solana." },
  { icon: Eye, title: "Vision", text: "Lead the Solana wolf pack, dominate the meme meta, and turn WOS into more than a short-lived meme launch." },
  { icon: Heart, title: "Philosophy", text: "No weak howls, no trend-chasing, no excuses. Transparency, fair launch, and strong community goals come first." },
  { icon: Crown, title: "Identity", text: "WOS is framed as the apex: not a mascot, not a sidekick, but the leader of the pack." },
];

const About = () => (
  <Layout>
    <section className="px-0 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="ice-panel rounded-[2rem] p-8">
          <span className="status-live"><span className="status-live-dot" />Project Signal</span>
          <h1 className="mt-6 text-4xl font-black md:text-6xl">This is a movement, not just a meme.</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-200/76">
            Official messaging describes Wolf on Solana as a heroic adventure and a purposeful community movement. The goal is not to crawl onto Pump.fun like another disposable meme coin, but to launch as the wolf that leads the pack.
          </p>
        </div>
        <div className="ice-panel overflow-hidden rounded-[2rem] p-3">
          <img src={wolfForest} alt="Wolf standing alert in nature" className="h-full min-h-[360px] w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Core Positioning" title="Built for purpose, trust, and dominance." description="The official story is consistent across the account bio, posts, and whitepaper release: long-term vision, anti-rug culture, and market leadership." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} className="ice-panel rounded-3xl p-7">
              <v.icon className="mb-4 h-8 w-8 text-gold" />
              <h3 className="text-xl font-bold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/72">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="ice-panel rounded-[2rem] p-8">
          <SectionHeading tag="Pack Structure" title="Community is the center of the adventure." />
          <div className="space-y-5 text-lg leading-relaxed text-slate-200/78">
            <p>
              The team remains anonymous, which fits the fair-launch, renounced-contract style of the project. Instead of selling personalities, the messaging focuses on an awesome team, a strong community, solid fundamentals, and a long-term vision.
            </p>
            <p>
              Public activity is centered on X through <span className="font-semibold text-white">@wolfonsol007</span>. No public Telegram, Discord, or fully released multi-page project resource is clearly established in the material you provided, which makes the community and the narrative the main engine of momentum right now.
            </p>
          </div>
        </div>
        <div className="ice-panel overflow-hidden rounded-[2rem] p-3">
          <img src={wolfPack} alt="Wolf pack together" className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
