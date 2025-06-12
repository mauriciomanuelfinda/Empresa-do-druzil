import { HistoryTimeline } from "@/components/history-timeline"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { MemberData } from "@/lib/constants"
import { TeamMemberCard } from "@/components/team_member_card"

export default function About() {
  return (
    <div className="py-12 bg-gray-100">
      {/* Hero Section */}
      <motion.section
        className="relative h-64 md:h-96 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-cinza_escuro/70 to-cinza_escuro/30 flex items-end">
          <div className="container px-4 pb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-dourado"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Sobre Nós
            </motion.h1>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container px-4 mt-12">
        <div className="mx-auto space-y-16">
          {/* Introdução */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-cinza_escuro mb-6">Duramat</h2>
            <p className="text-lg text-gray-700 mb-6">
              Somos um studio a full-service de comunicação e design, especializada em criar soluções criativas que geram resultados tangíveis para nossos clientes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-dourado/10 p-4 rounded-lg border border-dourado/20">
                <h3 className="font-bold text-cinza_escuro mb-2">+200</h3>
                <p className="text-gray-700">Clientes atendidos</p>
              </div>
              <div className="bg-dourado/10 p-4 rounded-lg border border-dourado/20">
                <h3 className="font-bold text-cinza_escuro mb-2">12+</h3>
                <p className="text-gray-700">Anos de experiência</p>
              </div>
              <div className="bg-dourado/10 p-4 rounded-lg border border-dourado/20">
                <h3 className="font-bold text-cinza_escuro mb-2">50+</h3>
                <p className="text-gray-700">Prêmios criativos</p>
              </div>
            </div>
          </motion.section>

          {/* História */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-cinza_escuro mb-6">Nossa Jornada</h2>
            <HistoryTimeline />
          </motion.section>

          {/* Missão e Valores */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-cinza_escuro mb-6">Nossa Essência</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-dourado mb-3">Missão</h3>
                <p className="text-gray-700">
                  Criar soluções de comunicação inovadoras que conectam marcas com seu público-alvo,
                  gerando valor e resultados mensuráveis através de estratégias criativas e inteligentes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dourado mb-3">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecida como a agência mais criativa e eficiente do mercado,
                  transformando desafios em oportunidades através de ideias que inspiram e vendem.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dourado mb-3">Valores</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Criatividade sem limites",
                  "Resultados mensuráveis",
                  "Transparência total",
                  "Paixão por inovação",
                  "Trabalho em equipe",
                  "Compromisso com excelência"
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-dourado mr-2">✓</span>
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Equipe */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-cinza_escuro mb-8">Conheça Nosso Time</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {MemberData.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.nome}
                  role={member.role}
                  image={member.image}
                  delay={index}
                />
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-cinza_escuro mb-4">Pronto para criar algo incrível juntos?</h3>
            <Button asChild className="bg-dourado hover:bg-[#d9a137] text-cinza_escuro">
              <Link to="/contact" className="flex items-center gap-2">
                Fale Conosco <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}