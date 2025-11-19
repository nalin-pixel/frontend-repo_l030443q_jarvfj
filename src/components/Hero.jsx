import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20 backdrop-blur">Ethical • Community-owned • Pan-African</div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Preserving Africa’s voices and cultures as digital assets for the AI future
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Ubuntu Voices AI Hub partners with communities to ethically source, protect, and monetise cultural data — ensuring value flows back to the people who own it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="rounded-full bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition">Join the early access list</a>
            <a href="#mission" className="rounded-full px-5 py-3 font-medium text-white/90 ring-1 ring-white/30 hover:bg-white/10 transition">Learn how it works</a>
          </div>
        </div>
      </div>
    </section>
  );
}
