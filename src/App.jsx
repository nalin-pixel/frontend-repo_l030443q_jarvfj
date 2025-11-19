import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Mission from './components/Mission'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background aura gradient */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(59,130,246,0.2),rgba(249,115,22,0.15),transparent_70%)] blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Mission />
      <CTA />

      <footer className="relative border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Ubuntu Voices AI Hub. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <span aria-hidden>•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
