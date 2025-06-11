import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const SERVICES = [
  {
    title: "Branding & Identidade Visual",
    description: "Desenvolvimento de marcas fortes e memoráveis com estratégias de posicionamento e identidade visual impactante.",
    icon: "🎨",
    features: [
      "Naming e posicionamento",
      "Design de logotipo",
      "Manual de identidade visual",
      "Arquitetura de marca"
    ]
  },
  {
    title: "Mídia Digital & Social Media",
    description: "Estratégias digitais completas para aumentar seu alcance e engajamento nas redes sociais.",
    icon: "📱",
    features: [
      "Gestão de redes sociais",
      "Anúncios patrocinados",
      "Influencer marketing",
      "Relatórios de performance"
    ]
  },
  {
    title: "Produção de Vídeo",
    description: "Criação de conteúdo audiovisual profissional para TV, redes sociais e campanhas publicitárias.",
    icon: "🎥",
    features: [
      "Vídeos institucionais",
      "Motion graphics",
      "Campanhas publicitárias",
      "Edição profissional"
    ]
  }
]

export default function Services() {
  return (
    <motion.div
      className="min-h-screen bg-[#f5f5f5]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-cinza_escuro to-[#3a3b3c] flex items-center justify-center">
        <motion.div
          className="relative text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dourado mb-4">Nossos Serviços</h1>
          <p className="text-dourado/90 max-w-2xl mx-auto">
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
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-cinza_escuro mb-3">{service.title}</h3>
                <p className="text-[#666] mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-dourado mr-2">•</span>
                      <span className="text-[#444]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="border-dourado text-dourado hover:bg-dourado/10 w-full">
                  Saiba Mais
                </Button>
              </div>
            </motion.div>
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