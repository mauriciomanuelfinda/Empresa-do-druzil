import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen bg-gray-100"
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
          <h1 className="text-4xl md:text-5xl font-bold text-dourado mb-4">Fale Conosco</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-cinza_escuro mb-6">Envie sua mensagem</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cinza_escuro mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cinza_escuro mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-cinza_escuro mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cinza_escuro mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-dourado hover:bg-[#d9a137] text-cinza_escuro"
              >
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-cinza_escuro mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dourado/10 rounded-full text-dourado">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cinza_escuro">Endereço</h3>
                    <p className="text-gray-600">Rua Criativa, 123 - Sala 45</p>
                    <p className="text-gray-600">São Paulo/SP - CEP 01234-567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dourado/10 rounded-full text-dourado">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cinza_escuro">Telefone</h3>
                    <p className="text-gray-600">(11) 98765-4321</p>
                    <p className="text-gray-600">(11) 3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dourado/10 rounded-full text-dourado">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cinza_escuro">E-mail</h3>
                    <p className="text-gray-600">contato@criativamente.com</p>
                    <p className="text-gray-600">comercial@criativamente.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-cinza_escuro mb-6">Horário de Funcionamento</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda - Sexta</span>
                  <span className="font-medium text-cinza_escuro">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado</span>
                  <span className="font-medium text-cinza_escuro">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo</span>
                  <span className="font-medium text-cinza_escuro">Fechado</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-cinza_escuro mb-6">Redes Sociais</h2>
              
              <div className="flex gap-4">
                {['Instagram', 'LinkedIn', 'Facebook', 'YouTube'].map((social) => (
                  <Button
                    key={social}
                    variant="outline"
                    className="border-dourado text-cinza_escuro hover:bg-dourado/10"
                  >
                    {social}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}