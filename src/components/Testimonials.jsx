export default function Testimonials() {
  const quotes = [
    { q: 'Ausan elevated our product launch with a sleek visual story. Fast, collaborative, and precise.', a: 'Mia K., Product Lead' },
    { q: 'The rebrand felt premium yet minimal. Motion work was subtle and powerful.', a: 'Daniel R., Creative Director' },
    { q: 'Clear communication and beautiful edits. Our feed has never looked better.', a: 'Sofia P., Marketing' },
  ]

  return (
    <section id="testimonials" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">What Clients Say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <a key={i} href="#work" className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <p className="text-slate-200">“{t.q}”</p>
              <p className="mt-4 text-sm text-slate-400">— {t.a}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
