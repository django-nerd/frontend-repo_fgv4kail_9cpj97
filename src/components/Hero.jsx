import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full bg-gradient-to-b from-black via-[#0a0f1c] to-[#0b1f3a] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0f1c]/50 to-[#0b1f3a]/70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">Ausan</span>
          </h1>
          <p className="mt-4 text-xl text-slate-200 max-w-2xl">
            Transforming Ideas into Stunning Visuals
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="rounded-full bg-gradient-to-r from-white to-blue-200 text-black px-6 py-3 text-sm font-semibold shadow hover:from-blue-50 hover:to-white transition-colors">
              View My Work
            </a>
            <a href="#contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-white hover:bg-white/10 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
