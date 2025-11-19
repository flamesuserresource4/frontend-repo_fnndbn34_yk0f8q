import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.06] p-10 backdrop-blur"
        >
          <h3 className="text-3xl font-semibold text-white md:text-4xl">Agenda una consulta</h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">Cuéntanos tu objetivo y en 30 minutos te proponemos un plan con oportunidades de automatización y un roadmap de IA.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contacto@arnanz.ai?subject=Consulta%20Arnanz%20AI"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(59,130,246,0.35)] transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(168,85,247,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
            >
              Escríbenos
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Calendario
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
