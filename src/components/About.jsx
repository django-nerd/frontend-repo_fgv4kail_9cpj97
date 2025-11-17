import { Film, Palette, Sparkles, Layers } from 'lucide-react'

export default function About() {
  const strengths = [
    { icon: Film, title: 'Cinematic Editing', desc: 'Motion graphics, storytelling, and polished post-production using After Effects & Filmora.' },
    { icon: Palette, title: 'Clean Aesthetics', desc: 'Minimal, modern design systems crafted in Figma & Affinity for brand and product.' },
    { icon: Layers, title: 'UI/UX Craft', desc: 'Thoughtful interfaces with clear hierarchy, accessibility, and flow.' },
    { icon: Sparkles, title: 'Motion-first', desc: 'Subtle animation and transitions that elevate the experience without noise.' },
  ]

  return (
    <section id="about" className="relative bg-gradient-to-b from-[#0b1f3a] via-black to-black text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">About Ausan</h2>
            <p className="mt-4 text-slate-300">
              I’m Ausan — a designer and video editor focused on creating clean, modern visuals and cinematic edits. I work in After Effects, Wondershare Filmora, Figma, and Affinity to deliver smooth, impactful experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-slate-300">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">After Effects</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Filmora</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Figma</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Affinity</span>
            </div>
          </div>

          <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
            {strengths.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <Icon className="text-blue-200" />
                <h3 className="mt-3 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
