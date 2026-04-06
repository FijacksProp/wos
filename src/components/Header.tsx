import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import wosLogo from "@/assets/wos-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Tokenomics", path: "/tokenomics" },
  { label: "Whitepaper", path: "/whitepaper" },
  { label: "Roadmap", path: "/roadmap" },
  { label: "Community", path: "/community" },
  { label: "FAQ", path: "/faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/45 backdrop-blur-2xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="rounded-xl border border-white/15 bg-white/5 p-1 shadow-gold">
            <img src={wosLogo} alt="WOS Logo" className="h-12 w-12 rounded-lg object-cover" />
          </div>
          <div className="min-w-0">
            <span className="block truncate font-display text-base font-bold text-foreground md:text-lg">
              Wolf on Solana <span className="text-gold">$WOS</span>
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.26em] text-sky-100/65 md:block">
              Leader of the Pack
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 lg:flex">
          <span className="status-live ml-1 mr-2">
            <span className="status-live-dot" />
            Pre-Launch
          </span>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-gold ${
                location.pathname === item.path ? "text-gold" : "text-slate-200/72"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://x.com/wolfonsol007"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex h-9 items-center rounded-full gradient-gold px-4 text-sm font-semibold text-slate-950 shadow-gold transition-all hover:opacity-90"
          >
            Join the Pack
          </a>
        </nav>

        <button className="text-foreground lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/10 bg-slate-950/92 lg:hidden">
            <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
              <div className="mb-2 flex items-center">
                <span className="status-live"><span className="status-live-dot" />Pre-Launch</span>
              </div>
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-gold ${location.pathname === item.path ? "text-gold" : "text-slate-200/75"}`}>
                  {item.label}
                </Link>
              ))}
              <a href="https://x.com/wolfonsol007" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex h-10 items-center justify-center rounded-full gradient-gold px-4 text-sm font-semibold text-slate-950 shadow-gold">
                Join the Pack
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
