import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import { menuItems } from "@/lib/constants"

export function Footer() {
  return (
    <motion.footer
      className="relative py-16 bg-cinza_escuro text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-dourado/20 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-dourado/20 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e Slogan */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="text-dourado">Criativa</span>Mente
            </h3>
            <p className="text-[#999]">
              "Transformamos ideias em experiências memoráveis que conectam marcas e pessoas."
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-[#333] hover:bg-dourado hover:text-cinza_escuro">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-[#333] hover:bg-dourado hover:text-cinza_escuro">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-[#333] hover:bg-dourado hover:text-cinza_escuro">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-[#333] hover:bg-dourado hover:text-cinza_escuro">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Navegação</h4>
            <ul className="space-y-3">
              {menuItems.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button variant="link" className="p-0 text-[#999] hover:text-dourado" asChild>
                    <Link to={link.path}>{link.label}</Link>
                  </Button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Branding",
                "Design Gráfico",
                "Mídia Digital",
                "Produção de Vídeo",
                "Marketing de Conteúdo",
                "Estratégia Criativa"
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button variant="link" className="p-0 text-[#999] hover:text-dourado">
                    {service}
                  </Button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Vamos Conversar</h4>
            <address className="not-italic space-y-4 text-[#999]">
              <p className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 text-dourado" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Av. Criatividade, 123<br />
                São Paulo - SP, 04567-890
              </p>
              <p className="flex items-center gap-3">
                <svg className="h-5 w-5 text-dourado" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@criativamente.com
              </p>
              <p className="flex items-center gap-3">
                <svg className="h-5 w-5 text-dourado" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (11) 98765-4321
              </p>
            </address>
          </div>
        </div>

        {/* Divisor e Copyright */}
        <div className="border-t border-[#333] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#777] text-sm">
            &copy; {new Date().getFullYear()} CriativaMente. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <Button variant="link" className="p-0 text-[#777] hover:text-dourado text-sm">
              Política de Privacidade
            </Button>
            <Button variant="link" className="p-0 text-[#777] hover:text-dourado text-sm">
              Termos de Serviço
            </Button>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}