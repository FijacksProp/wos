import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import wolfConstellation from "@/assets/wolf-constellation.jpg";

const Whitepaper = () => (
  <Layout>
    <section className="px-0 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="ice-panel overflow-hidden rounded-[2rem] p-3">
            <img src={wolfConstellation} alt="Wolf visual artwork" className="h-full min-h-[340px] w-full rounded-[1.5rem] object-cover" />
          </div>
          <div className="ice-panel rounded-[2rem] p-8">
            <SectionHeading tag="Whitepaper" title="The released WOS manifesto." description="Released on April 4, 2026, the whitepaper is a single-page visual document and the core public source for the project thesis." />
            <div className="space-y-5 text-slate-200/76 leading-relaxed">
              <p><strong className="text-white">Opening line:</strong> �This isn�t just another wolf meme. The Alpha that eats the charts.�</p>
              <p><strong className="text-white">Project stance:</strong> While dogs chase their tails and copycat wolves play follow-the-leader, WOS is framed as the wolf that runs the hunt, bites, pumps, and leads the Solana wolf pack to the moon.</p>
              <p><strong className="text-white">Legend:</strong> In the beginning there was Pump.fun. Out of the chaos came a thousand dog coins and a hundred copycat wolves, but one wolf refused to follow. Forged in the same degen fire that birthed Solana�s greatest memes, Wolf on Sol emerged as the apex.</p>
              <p><strong className="text-white">Narrative line:</strong> While others copy, $WOS dictates. While others chase, $WOS hunts. While others whimper at the first red candle, $WOS eats the charts and howls for more.</p>
              <p><strong className="text-white">Tokenomics:</strong> 1,000,000,000 total supply, 0% buy / 0% sell tax, 100% fair launch on Pump.fun, locked liquidity, LP burned at launch, renounced contract, no team wallets, and no hidden allocations.</p>
              <p><strong className="text-white">Important note:</strong> No separate PDF or extra whitepaper pages have been released publicly beyond that single-page graphic, so this page reflects the complete released content currently available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Whitepaper;

