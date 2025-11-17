import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project_type: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', msg: 'Sending...' })
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus({ state: 'success', msg: 'Thanks! I will get back to you shortly.' })
      setForm({ name: '', email: '', project_type: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', msg: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="relative bg-gradient-to-b from-black via-black to-[#0b1f3a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Let’s Collaborate</h2>
            <p className="mt-3 text-slate-300">Share a few details about your project and I’ll reach out.</p>
            <div className="mt-6 flex gap-4 text-sm text-slate-300">
              <a href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a>
              <a href="https://behance.net" target="_blank" className="hover:text-white">Behance</a>
              <a href="mailto:hello@example.com" className="hover:text-white">Email</a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-white/30"/>
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-white/30"/>
            </div>
            <div>
              <label className="block text-sm text-slate-300">Project Type</label>
              <input name="project_type" value={form.project_type} onChange={onChange} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-white/30"/>
            </div>
            <div>
              <label className="block text-sm text-slate-300">Message</label>
              <textarea name="message" value={form.message} onChange={onChange} required rows={5} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-white/30"/>
            </div>

            <button disabled={status.state === 'loading'} className="w-full rounded-full bg-gradient-to-r from-white to-blue-200 text-black px-6 py-3 text-sm font-semibold hover:from-blue-50 hover:to-white transition-colors disabled:opacity-60">
              {status.state === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status.state !== 'idle' && (
              <p className={`text-sm ${status.state === 'success' ? 'text-green-300' : status.state === 'error' ? 'text-red-300' : 'text-slate-300'}`}>{status.msg}</p>
            )}
          </form>
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Ausan — All rights reserved.</p>
            <div className="flex gap-6">
              <a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a>
              <span className="text-slate-600">|</span>
              <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
