import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { SERVICES_DETAILS } from "@/lib/constants"
import { ServiceCard } from "@/components/service_card"

export default function Services() {
  return (
    <motion.div
      className="min-h-screen mt-4 md:mt-1 bg-[#f5f5f5]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <div className="relative mt-4 md:mt-1 h-64 md:h-80 bg-gradient-to-r from-cinza_escuro to-[#3a3b3c] flex items-center justify-center">
        <motion.div
          className="relative text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-dourado mb-4 ">Nossos Serviços</h1>
          <p className="text-white max-w-2xl mx-auto">
            Soluções criativas integradas para impulsionar sua marca
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-cinza_escuro mb-4">O Que Fazemos</h2>
          <p className="text-[#666] max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços de comunicação e design para atender todas as necessidades da sua marca
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DETAILS.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              highlights={service.highlights}
              icon={service.icon}
              description={service.description}
              delay={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-cinza_escuro mb-4">Precisa de uma solução personalizada?</h3>
          <p className="text-[#666] mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e criar uma estratégia sob medida
          </p>
          <Button asChild className="bg-dourado hover:bg-[#d9a037] text-cinza_escuro">
            <Link to="/contact">
              Solicitar Orçamento
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}