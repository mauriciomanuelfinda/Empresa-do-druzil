import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"
import { PORTFOLIO_VIDEOS, SERVICES_DETAILS } from "@/lib/constants"

export default function Home() {
  return (
    <div className="bg-[#f5f5f5]">
      <Hero />

      {/* Seção de Serviços com Vídeos */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-cinza_escuro">Nossos Serviços</h2>
            <p className="text-[#666] max-w-2xl mx-auto text-lg">
              Soluções criativas que entregam resultados mensuráveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DETAILS.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg h-64 mb-4">
                  <img 
                    src={service.videoThumbnail} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 flex items-center justify-center">
                    <a 
                      href={service.videoUrl} 
                      className="bg-white/90 hover:bg-white text-dourado rounded-full p-3 shadow-lg transition-all hover:scale-110"
                    >
                      <PlayCircle className="w-10 h-10" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-cinza_escuro mb-2">{service.title}</h3>
                <p className="text-[#666] mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-dourado mr-2">•</span>
                      <span className="text-[#444]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-dourado text-dourado hover:bg-dourado/10 w-full">
                  Detalhes do Serviço
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Seção de Portfólio em Vídeo */}
      <motion.section
        className="py-20 bg-[#f5f5f5]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-cinza_escuro">Trabalhos em Destaque</h2>
            <p className="text-[#666] max-w-2xl mx-auto text-lg">
              Veja nossas produções e o impacto gerado para os clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_VIDEOS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video mb-4">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 flex items-center justify-center">
                    <a 
                      href={item.videoUrl} 
                      className="bg-white/90 hover:bg-white text-dourado rounded-full p-3 shadow-lg transition-all hover:scale-110"
                    >
                      <PlayCircle className="w-10 h-10" strokeWidth={1.5} />
                    </a>
                  </div>
                  <span className="absolute top-4 left-4 bg-dourado text-cinza_escuro text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-cinza_escuro mb-2">{item.title}</h3>
                <p className="text-[#666]">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-dourado hover:bg-[#d9a037] text-cinza_escuro px-8 py-4 text-lg">
              Ver Portfólio Completo
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Depoimento em Vídeo */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
                <img 
                  src="/testimonial-video-thumb.jpg" 
                  alt="Depoimento de cliente"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 flex items-center justify-center">
                  <a 
                    href="#testimonial-video" 
                    className="bg-white/90 hover:bg-white text-dourado rounded-full p-4 shadow-lg transition-all hover:scale-110"
                  >
                    <PlayCircle className="w-12 h-12" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-cinza_escuro">Resultados Reais</h2>
              <blockquote className="text-2xl italic text-[#444] mb-6">
                "A equipe transformou completamente nossa presença digital. Em 6 meses, nosso faturamento online cresceu 180%."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-dourado/30">
                  <img src="/client-ceo.jpg" alt="CEO da empresa" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-cinza_escuro">Carlos Mendes</p>
                  <p className="text-dourado">CEO, Ventura Cosméticos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Final */}
      <motion.section
        className="py-20 bg-gradient-to-r from-cinza_escuro to-[#3a3b3c]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para transformar sua marca?</h2>
          <p className="text-dourado text-xl mb-10 max-w-2xl mx-auto">
            Vamos criar algo incrível juntos. Entre em contato para uma consultoria gratuita.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-dourado hover:bg-[#d9a037] text-cinza_escuro px-10 py-7 text-lg font-bold">
              Fale Conosco
            </Button>
            <Button variant="outline" className="border-dourado text-dourado hover:bg-dourado/10 px-10 py-7 text-lg">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}