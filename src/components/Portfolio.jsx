import { ExternalLink } from 'lucide-react'

const sampleDesigns = [
  { title: 'Brand System — Nova', img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop', desc: 'Logo, palette, and typography for a tech brand.' },
  { title: 'UI/UX — Flow Dashboard', img: 'https://images.unsplash.com/photo-1551281044-8b59c6b4f31c?q=80&w=1200&auto=format&fit=crop', desc: 'Clean analytics dashboard with accessible patterns.' },
  { title: 'Website Design — Orbit', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop', desc: 'Premium landing with motion accents and grids.' },
  { title: 'Branding — Lumen', img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop', desc: 'Identity redesign and adaptive logo marks.' },
]

const sampleVideos = [
  { title: 'Product Reel', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { title: 'Motion Graphics', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Selected Work</h2>
            <p className="mt-2 text-slate-300">Design and video projects with a cinematic, minimal feel.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Get a quote <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleDesigns.map((item) => (
            <figure key={item.title} className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img src={item.img} alt={item.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#0b1f3a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {sampleVideos.map((v) => (
            <div key={v.title} className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <video controls className="w-full aspect-video">
                <source src={v.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-blue-400/30" />
              <div className="p-4">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-slate-300">Highlights edited in After Effects & Filmora.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
