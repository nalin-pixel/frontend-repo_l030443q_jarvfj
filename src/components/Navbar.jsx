import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 shadow-lg shadow-purple-500/20"></div>
          <div>
            <p className="text-white font-semibold leading-tight">Ubuntu Voices</p>
            <p className="text-xs text-white/60 -mt-0.5">AI Hub</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#mission" className="hover:text-white transition">Mission</a>
          <a href="#features" className="hover:text-white transition">Platform</a>
          <a href="#impact" className="hover:text-white transition">Impact</a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
            Get early access
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white"><Menu size={20} /></button>
      </div>
    </header>
  );
}
