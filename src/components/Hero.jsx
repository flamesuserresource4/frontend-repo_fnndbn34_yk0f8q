import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Accent glows */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-20 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-600/25 via-blue-500/20 to-amber-400/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 sm:pt-28 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur" 
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Agencia boutique de IA para empresas ambiciosas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Arnanz AI
              <span className="block bg-gradient-to-r from-white via-blue-200 to-fuchsia-200 bg-clip-text text-transparent"> inteligencia que impulsa resultados</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-xl text-lg text-slate-300"
            >
              Diseñamos e implementamos automatizaciones, chatbots y flujos inteligentes a medida para optimizar tus operaciones y hacer crecer tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#cta"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(59,130,246,0.35)] transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(168,85,247,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
              >
                Agendar una consulta
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#servicios" className="inline-flex items-center text-slate-300 hover:text-white/90 transition">
                Ver servicios
              </a>
            </motion.div>
          </div>

          {/* Spline visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-[420px] w-full sm:h-[520px] lg:h-[560px]"
          >
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl" />
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Soft gradient overlay to blend */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
