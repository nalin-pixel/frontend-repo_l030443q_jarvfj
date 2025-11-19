export default function Mission() {
  return (
    <section id="mission" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">A community‑centric approach</h2>
          <p className="mt-4 text-white/80">
            We honour the principle of Ubuntu — I am because we are. Our methodology ensures communities maintain control over their data with clear consent, transparent governance, and shared economic benefits.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>• Consent frameworks in local languages</li>
            <li>• Contributor wallets for automated payouts</li>
            <li>• Usage dashboards for transparency</li>
            <li>• Culturally informed data stewardship</li>
          </ul>
        </div>
        <div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-orange-400/20 p-8">
            <p className="text-white/90 text-lg">
              “When communities own their voices and stories, AI becomes a tool of empowerment — not extraction. We are building the rails for that future across Africa.”
            </p>
            <div className="mt-6 text-white/70 text-sm">Ubuntu Voices AI Hub</div>
          </div>
        </div>
      </div>
    </section>
  )
}
