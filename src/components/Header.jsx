import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">Ausan</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-black bg-gradient-to-r from-white to-blue-200 hover:from-blue-50 hover:to-white transition-colors">
              Contact Me
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-black bg-gradient-to-r from-white to-blue-200" onClick={() => setOpen(false)}>
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
