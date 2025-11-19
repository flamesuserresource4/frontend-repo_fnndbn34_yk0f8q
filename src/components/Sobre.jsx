import React from 'react'
import { motion } from 'framer-motion'

const Sobre = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(147,51,234,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Sobre nosotros</h2>
            <p className="mt-4 text-slate-300">
              Somos un equipo multidisciplinar con experiencia en IA aplicada, diseño de producto y automatización empresarial. Nos enfocamos en ROI y rapidez, con soluciones escalables y seguras.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400"/>Metodología de descubrimiento y diseño basada en datos.</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-400"/>Stack moderno y partners líderes del ecosistema IA.</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-fuchsia-400"/>Acompañamiento end-to-end: idea, desarrollo, despliegue y mejora continua.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1"
          >
            <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_120deg_at_50%_50%,rgba(59,130,246,0.15),rgba(168,85,247,0.15),rgba(251,191,36,0.12),rgba(59,130,246,0.15))] blur-2xl" />
            <div className="relative z-10 flex h-full items-center justify-center rounded-3xl bg-slate-900/60 backdrop-blur-xl">
              <div className="text-center">
                <div className="text-xs uppercase tracking-widest text-slate-300">Metodología</div>
                <div className="mt-2 text-3xl font-semibold text-white">Descubrir • Diseñar • Desplegar • Escalar</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
