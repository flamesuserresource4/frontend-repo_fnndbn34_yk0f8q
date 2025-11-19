import React from 'react'
import { motion } from 'framer-motion'

const benefits = [
  {
    title: 'Más ingresos, menos coste',
    desc: 'Automatiza tareas repetitivas y libera a tu equipo para lo estratégico.',
    metric: 'Hasta 60% ahorro operativo',
  },
  {
    title: 'Experiencias memorables',
    desc: 'Respuestas inmediatas, coherentes y personalizadas en todos los canales.',
    metric: 'CSAT +30% promedio',
  },
  {
    title: 'Implementación ágil',
    desc: 'Proyectos en semanas, no meses. Enfoque iterativo con entregas continuas.',
    metric: 'MVP en 10-15 días',
  },
]

const Beneficios = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,165,233,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-white md:text-4xl"
          >
            Beneficios para tu empresa
          </motion.h2>
          <p className="mt-3 text-slate-300">Resultados reales centrados en negocio.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 text-white backdrop-blur"
            >
              <h3 className="text-lg font-medium">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{b.desc}</p>
              <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                {b.metric}
              </div>
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Beneficios
