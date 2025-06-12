import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BLOG_POSTS } from "@/lib/constants"

export default function Blog() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-dourado mb-4">Blog Criativo</h1>
          <p className="text-white max-w-2xl mx-auto">
            Insights, tendências e estratégias do mundo do design e marketing
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
          <h2 className="text-3xl font-bold text-cinza_escuro mb-4">Artigos Recentes</h2>
          <p className="text-cinza_escuro/80 max-w-2xl mx-auto">
            Conteúdo exclusivo para você se inspirar e ficar por dentro das novidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium px-3 py-1 bg-dourado/10 text-cinza_escuro rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date} • {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-cinza_escuro mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 text-dourado hover:text-[#d9a137]">
                  Continuar Lendo →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-8 mt-16 max-w-4xl mx-auto border border-gray-200"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-cinza_escuro mb-2">Assine nossa newsletter</h3>
            <p className="text-cinza_escuro/80 mb-6 max-w-2xl mx-auto">
              Receba insights exclusivos e atualizações diretamente no seu e-mail
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dourado"
              />
              <Button className="bg-dourado hover:bg-[#d9a137] text-cinza_escuro whitespace-nowrap">
                Assinar
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}