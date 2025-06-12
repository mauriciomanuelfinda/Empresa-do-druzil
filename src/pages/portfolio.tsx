import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { PORTFOLIO_ITEMS, CATEGORIES } from "@/lib/constants"
import { PortfolioCard } from "@/components/portfolio_card"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedItem, setSelectedItem] = useState<null | typeof PORTFOLIO_ITEMS[number]>(null)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const filteredItems = selectedCategory === "Todos"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory)

  const handlePlayVideo = (id: number) => {
    setPlayingVideo(id)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative mt-4 md:mt-1 h-64 md:h-80 bg-gradient-to-r from-cinza_escuro to-[#3a3b3c] flex items-center justify-center">
        <motion.div
          className="relative text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#EEB23E] mb-4">Nosso Portfólio de Vídeos</h1>
          <p className="text-white max-w-2xl mx-auto">
            Criações em 2D e 3D que contam histórias e geram resultados
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-12 md:py-16">
        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full text-sm md:text-base ${selectedCategory === category ? 'bg-[#EEB23E] hover:bg-[#d9a137] text-[#262728]' : 'border-[#262728] text-[#262728] hover:bg-[#EEB23E]/10'}`}
            >
              {category === "2D" ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#EEB23E] rounded-sm"></span>
                  Vídeos 2D
                </span>
              ) : category === "3D" ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#262728] rounded-sm"></span>
                  Vídeos 3D
                </span>
              ) : (
                category
              )}
            </Button>
          ))}
        </motion.div>

        {/* Galeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              video={item.video}
              thumbnail={item.thumbnail}
              category={item.category}
              results={item.results}
              playingVideo={playingVideo}
              handlePlayVideo={handlePlayVideo}
              onVideoEnd={() => setPlayingVideo(null)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-[#262728] mb-4">Quer um vídeo impactante para sua marca?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Nossa equipe especializada em 2D e 3D está pronta para transformar sua ideia em realidade
          </p>
          <Button asChild className="bg-[#EEB23E] hover:bg-[#d9a137] text-[#262728]">
            <Link to="/contact">
              Solicitar Orçamento
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 text-[#262728]"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-full bg-black flex items-center">
                <video
                  src={selectedItem.video}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-8">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${selectedItem.category === '2D' ? 'bg-[#EEB23E]/20 text-[#EEB23E]' : 'bg-[#262728]/20 text-[#262728]'}`}>
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-bold text-[#262728] mb-4">{selectedItem.title}</h3>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#262728] mb-2">Resultados alcançados:</h4>
                  <p className="text-[#262728]">{selectedItem.results}</p>
                </div>

                <Button className="w-full bg-[#EEB23E] hover:bg-[#d9a137] text-[#262728]">
                  Ver Processo Criativo
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}