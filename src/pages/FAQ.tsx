import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is $WOS?",
    a: "Wolf on Solana ($WOS) is a pre-launch Solana meme coin project positioned as a heroic adventure and a community-driven movement, not just another short-lived Pump.fun meme.",
  },
  {
    q: "When is the launch?",
    a: "The official launch date being pushed across project posts is April 20, 2026, on Pump.fun.",
  },
  {
    q: "When was the whitepaper released?",
    a: "The official whitepaper graphic was released on April 4, 2026. No additional PDF or multi-page public version has been released yet.",
  },
  {
    q: "What are the tokenomics?",
    a: "The released figures are 1,000,000,000 total supply, 0% buy tax, 0% sell tax, 100% fair launch on Pump.fun, locked liquidity with LP burned, renounced contract, and no team wallets or hidden allocations.",
  },
  {
    q: "Why do some materials say $WOS?",
    a: "The official project identity is $WOS. Any earlier SWOS-style wording should be read as the same token.",
  },
  {
    q: "Where is the community active right now?",
    a: "Current public activity appears to be centered on X through @wolfonsol007. No public Telegram, Discord, or separate fully released site resource is clearly established in the material you provided.",
  },
];

const FAQ = () => (
  <Layout>
    <section className="px-0 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="ice-panel rounded-[2rem] p-8">
          <SectionHeading tag="FAQ" title="Clear answers from the released material." description="This page reflects the official public information provided so far around the WOS launch narrative, tokenomics, and community direction." />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-white/10 bg-slate-950/25 px-6 data-[state=open]:border-sky-200/30">
                <AccordionTrigger className="text-left font-display font-semibold hover:text-gold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-slate-200/74">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;

