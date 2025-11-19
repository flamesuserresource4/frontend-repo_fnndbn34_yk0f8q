import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Workflow, Link as LinkIcon } from 'lucide-react'

const items = [
  {
    icon: Bot,
    title: 'Chatbots y asistentes',
    desc: 'Atención 24/7, calificación de leads y soporte contextual con IA multicanal.',
  },
  {
    icon: Workflow,
    title: 'Automatizaciones',
    desc: 'Procesos de negocio orquestados con IA: desde ventas y soporte hasta back-office.',
  },
  {
    icon: LinkIcon,
    title: 'Integraciones',
    desc: 'Conecta tus herramientas (CRM, ERP, WhatsApp, Slack, etc.) con flujos inteligentes.',
  },
]

const Servicios = () => {
  return (
    <section id="servicios" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-white md:text-4xl"
          >
            Soluciones clave
          </motion.h2>
          <p className="mt-3 text-slate-300">Lo esencial para acelerar tu adopción de IA con impacto tangible.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-blue-600/30 to-fuchsia-600/30 p-3 ring-1 ring-inset ring-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{desc}</p>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 blur-2xl transition duration-300 group-hover:scale-125" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
