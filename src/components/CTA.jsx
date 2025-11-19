export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 p-1">
          <div className="rounded-3xl bg-slate-950 p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white">Be part of the early access cohort</h3>
              <p className="mt-3 text-white/85">Foundations, researchers, culture custodians and creators — help shape the platform and pilot benefit‑sharing models.</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Your email" className="w-full rounded-full bg-white/10 px-5 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/20 focus:ring-white/40" />
              <button className="rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-white/90 transition">Request invite</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
