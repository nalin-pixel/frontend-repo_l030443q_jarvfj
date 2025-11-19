import { ShieldCheck, Users, Coins, Radio, Database, Sparkles } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <ShieldCheck className="h-6 w-6" />, title: 'Ethically sourced, consent-first',
      desc: 'Transparent collection with clear rights, revocation, and anonymisation layers.'
    },
    {
      icon: <Users className="h-6 w-6" />, title: 'Community-owned data',
      desc: 'Data as a shared asset managed with community governance and benefit-sharing.'
    },
    {
      icon: <Coins className="h-6 w-6" />, title: 'Economic participation',
      desc: 'Revenue flows back to contributors through royalties and micro‑payouts.'
    },
    {
      icon: <Database className="h-6 w-6" />, title: 'Secure cultural vault',
      desc: 'Encrypted storage with access control, audit logs, and usage transparency.'
    },
    {
      icon: <Radio className="h-6 w-6" />, title: 'Voice + language datasets',
      desc: 'Dialects, oral histories, songs, proverbs — curated and ready for AI training.'
    },
    {
      icon: <Sparkles className="h-6 w-6" />, title: 'Model-ready pipelines',
      desc: 'Cleanroom processing, labeling, and bias checks for responsible AI.'
    }
  ]

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">A platform designed for culture, built for AI</h2>
          <p className="mt-3 text-white/70">We translate living heritage into secure, permissioned digital assets that power next‑gen African AI.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
                {it.icon}
              </div>
              <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
