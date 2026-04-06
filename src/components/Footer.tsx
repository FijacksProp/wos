import { Link } from "react-router-dom";
import wosLogo from "@/assets/wos-logo.png";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Tokenomics", path: "/tokenomics" },
  { label: "Whitepaper", path: "/whitepaper" },
  { label: "Roadmap", path: "/roadmap" },
  { label: "Community", path: "/community" },
  { label: "FAQ", path: "/faq" },
];

const Footer = () => (
  <footer className="relative z-10 border-t border-white/10 bg-slate-950/45 backdrop-blur-xl">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-1 shadow-gold">
              <img src={wosLogo} alt="WOS Logo" className="h-10 w-10 rounded-lg object-cover" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Wolf on Solana <span className="text-gold">$WOS</span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-200/72">
            An icy wolf-themed Solana brand built around fair launch mechanics, community signal, and a colder premium visual identity.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display font-semibold text-gold">Navigation</h4>
          <div className="grid grid-cols-2 gap-2">
            {footerLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-sm text-slate-200/72 transition-colors hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display font-semibold text-gold">Signal</h4>
          <p className="mb-3 text-sm text-slate-200/72">Winter-born branding. Pack-first culture. Solana-native momentum.</p>
          <a href="https://x.com/wolfonsol007" target="_blank" rel="noopener noreferrer" className="text-sm text-sky-200 transition-colors hover:text-white">
            X (Twitter): @wolfonsol007
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-8 text-center">
        <p className="text-xs text-slate-300/70">Cryptocurrency investments are subject to risk. Always do your own research.</p>
        <p className="mt-2 text-xs text-slate-300/55">© {new Date().getFullYear()} Wolf on Solana ($WOS). All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
