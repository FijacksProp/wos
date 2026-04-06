import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import wolfConstellation from "@/assets/wolf-constellation.jpg";

const Whitepaper = () => (
  <Layout>
    <section className="px-0 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="ice-panel overflow-hidden rounded-[2rem] p-3">
            <img
              src={wolfConstellation}
              alt="Wolf visual artwork"
              className="h-full min-h-[340px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="ice-panel rounded-[2rem] p-6 sm:p-8">
            <SectionHeading
              tag="Whitepaper"
              title="The official $WOS white paper."
              description="Presented in a premium reading layout using the released Wolf on Solana whitepaper content."
            />

            <div className="mb-6 rounded-[1.5rem] border border-white/10 bg-slate-950/25 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Opening Line</p>
              <p className="mt-3 text-lg leading-relaxed text-white sm:text-xl">
                This isn’t just another wolf meme. The Alpha that eats the charts.
              </p>
            </div>

            <article className="space-y-5 text-slate-200/78">
              <section className="rounded-[1.5rem] border border-white/10 bg-slate-950/20 p-5 sm:p-6">
                <h3 className="text-lg font-bold text-white sm:text-xl">Project Statement</h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    While the dogs are busy chasing their own tails and the other “wolf” coins play follow-the-leader,
                    <span className="font-semibold text-white"> $WOS </span>
                    runs the hunt.
                  </p>
                  <p>
                    Born on Solana’s fastest chain, forged in pure degen fire, and built to dominate the meme meta,
                    <span className="font-semibold text-white"> $WOS </span>
                    isn’t here to bark. It’s here to bite, pump, and lead the entire Solana wolf pack to the moon.
                  </p>
                  <p>
                    No rugs. No weak hands. Pure alpha energy.
                    <br />
                    The Pack doesn’t follow trends — we set them.
                  </p>
                  <p className="font-medium text-white">
                    Tired of puppy coins?
                    <br />
                    Time to run with the real predator.
                  </p>
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-white/10 bg-slate-950/20 p-5 sm:p-6">
                <h3 className="text-lg font-bold text-white sm:text-xl">The Legend</h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    In the beginning there was Pump.fun.
                    <br />
                    Out of chaos crawled a thousand dog coins and a hundred copycat wolves.
                  </p>
                  <p>But one wolf refused to follow.</p>
                  <p>
                    Forged in the same degen fire that birthed the greatest Solana memes, “Wolf on Sol” emerged as the apex.
                    <br />
                    Not a mascot. Not a sidekick. The leader of the pack.
                  </p>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4 sm:p-5">
                    <p>While others copy, <span className="font-semibold text-white">$WOS</span> dictates.</p>
                    <p className="mt-2">While others chase, <span className="font-semibold text-white">$WOS</span> hunts.</p>
                    <p className="mt-2">While others whimper at the first red candle, <span className="font-semibold text-white">$WOS</span> eats the charts and howls for more.</p>
                  </div>
                  <p className="font-medium text-white">
                    This is the wolf that doesn’t need a narrative.
                    <br />
                    It is the narrative.
                  </p>
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-white/10 bg-slate-950/20 p-5 sm:p-6">
                <h3 className="text-lg font-bold text-white sm:text-xl">Tokenomics – Breakdown</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Total Supply</p>
                    <p className="mt-2 text-base font-semibold text-white">1,000,000,000 $WOS (1 Billion)</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Liquidity</p>
                    <p className="mt-2 text-base font-semibold text-white">Locked & LP burned at launch (NO RUGS, EVER)</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Taxes</p>
                    <p className="mt-2 text-base font-semibold text-white">0% buy / 0% sell (pure alpha flow)</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Distribution</p>
                    <p className="mt-2 text-base font-semibold text-white">100% fair launch on Pump.fun</p>
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/35 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Contract</p>
                  <p className="mt-2 text-base font-semibold text-white">Renounced (the pack owns the chain now)</p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-200/78 sm:text-base">
                  No team wallets. No hidden allocations. No excuses.
                  <br />
                  Just pure, raw, hungry wolf energy.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Whitepaper;
