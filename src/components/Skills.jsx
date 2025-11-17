import { BadgeCheck } from 'lucide-react'

const skills = [
  { name: 'After Effects', level: 90 },
  { name: 'Wondershare Filmora', level: 85 },
  { name: 'Figma', level: 92 },
  { name: 'Affinity', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-gradient-to-b from-black via-[#0b1f3a] to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Skills</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {skills.map((s) => (
            <div key={s.name} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <p className="font-medium">{s.name}</p>
                <BadgeCheck className="text-blue-200" size={18} />
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-white to-blue-300" style={{ width: `${s.level}%` }} />
              </div>
              <p className="mt-2 text-xs text-slate-300">{s.level}%</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-slate-300">
          <div className="px-3 py-2 rounded-full bg-white/5 border border-white/10">After Effects</div>
          <div className="px-3 py-2 rounded-full bg-white/5 border border-white/10">Filmora</div>
          <div className="px-3 py-2 rounded-full bg-white/5 border border-white/10">Figma</div>
          <div className="px-3 py-2 rounded-full bg-white/5 border border-white/10">Affinity</div>
        </div>
      </div>
    </section>
  )
}
