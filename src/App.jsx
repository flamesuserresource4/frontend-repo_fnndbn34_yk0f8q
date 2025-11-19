import React from 'react'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Beneficios from './components/Beneficios'
import Sobre from './components/Sobre'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar minimal */}
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-500 to-fuchsia-500" />
              <span className="text-sm font-medium tracking-wide text-white">Arnanz AI</span>
            </div>
            <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a className="hover:text-white/90" href="#servicios">Servicios</a>
              <a className="hover:text-white/90" href="#beneficios">Beneficios</a>
              <a className="hover:text-white/90" href="#sobre">Sobre</a>
              <a className="hover:text-white/90" href="#cta">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <div id="beneficios"><Beneficios /></div>
        <div id="sobre"><Sobre /></div>
        <Servicios />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 bg-white/[0.02] py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Arnanz AI — Inteligencia y automatización para empresas
        </div>
      </footer>
    </div>
  )
}

export default App
