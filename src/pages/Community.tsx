import { motion } from "framer-motion";
import { Users, Heart, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import wolfPack from "@/assets/wolf-pack.jpg";

const reasons = [
  { icon: Users, title: "Join the Pack", text: "Official posts repeatedly call on the WOS family, friends, and early believers to run together." },
  { icon: Heart, title: "Strong Community Goals", text: "The project messaging stresses steady vision, long-term building, and a future built with the community." },
  { icon: Shield, title: "Trust After Rugs", text: "The movement is framed as a fighter for people tired of rugs, weak launches, and greedy dev behavior." },
];

const Community = () => (
  <Layout>
    <section className="px-0 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="ice-panel overflow-hidden rounded-[2rem] p-3 order-2 lg:order-1">
          <img src={wolfPack} alt="Wolf pack moving together" className="h-full min-h-[360px] w-full rounded-[1.5rem] object-cover" />
        </div>
        <div className="ice-panel rounded-[2rem] p-8 order-1 lg:order-2">
          <span className="status-live"><span className="status-live-dot" />Community Signal</span>
          <h1 className="mt-6 text-4xl font-black md:text-6xl">Join the pack. Run the hunt.</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-200/76">
            Right now the project lives almost entirely on X through <span className="font-semibold text-white">@wolfonsol007</span>. The account messaging treats the community as the real engine of momentum: strong goals, pack unity, and the belief that WOS is built for more than a fast flip.
          </p>
          <a href="https://x.com/wolfonsol007" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-12 items-center rounded-full gradient-gold px-8 text-base font-bold text-slate-950 shadow-gold transition-all hover:opacity-90">
            Follow @wolfonsol007
          </a>
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading tag="Community Role" title="The pack is central to the whole story." />
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }} className="ice-panel rounded-3xl p-7 text-center">
              <r.icon className="mx-auto h-8 w-8 text-gold" />
              <h3 className="mt-4 text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/72">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Community;
