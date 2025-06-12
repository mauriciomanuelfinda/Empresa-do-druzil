import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from "lucide-react"
import { menuItems, SERVICES_DETAILS } from "@/lib/constants"

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
              <span className="text-dourado">Dura</span>mat
            </h3>
            <p className="text-[#999]">
              "Transformamos ideias em experiências memoráveis que conectam marcas e pessoas."
            </p>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/duramat_studio?igsh=Zmc1dmh0MjZxZzBw"
                target="_blank"
                className="rounded-full bg-[#333] hover:bg-dourado hover:text-cinza_escuro p-3"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/duramat/"
                className="rounded-full bg-[#333] hover:bg-dourado hover:text-cinza_escuro p-3"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/studio-material-duro/"
                className="rounded-full bg-[#333] hover:bg-dourado hover:text-cinza_escuro p-3"
              >
                <Linkedin className="h-5 w-5" />
              </a>
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
              {SERVICES_DETAILS.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button variant="link" className="p-0 text-[#999] hover:text-dourado">
                    {service.title}
                  </Button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="text-white space-y-6">
            <h4 className="font-bold text-xl md:text-2xl">Vamos Conversar</h4>
            <address className="not-italic space-y-5 text-white/70 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <MapPin className="text-dourado mt-1 w-5 h-5 shrink-0" />
                <p>
                  Bairro Vila Alice<br />
                  Junto ao Instituto Politécnico Industrial de Luanda – IPIL (Ex-IMIL)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-dourado w-5 h-5 shrink-0" />
                <a
                  href="mailto:studioduramat@gmail.com"
                  className="hover:underline break-all"
                >
                  studioduramat@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-dourado mt-1 w-5 h-5 shrink-0" />
                <div>
                  <p>+224 927 449 491</p>
                  <p>+224 927 438 714</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Divisor e Copyright */}
        <div className="border-t border-[#333] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#777] text-sm">
            &copy; {new Date().getFullYear()} Duramat. Todos os direitos reservados.
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
