import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Play } from "lucide-react"

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Relançamento da Marca X",
    description: "Estratégia completa de rebranding que reposicionou a marca no mercado premium.",
    video: "/portfolio/brand-x.mp4",
    thumbnail: "/portfolio/brand-x-thumb.jpg",
    category: "Branding",
    results: "Aumento de 240% no reconhecimento"
  },
  {
    id: 2,
    title: "Campanha de Verão - Produto Y",
    description: "Campanha multiplataforma que gerou engajamento recorde nas redes sociais.",
    video: "/portfolio/summer-y.mp4",
    thumbnail: "/portfolio/summer-y-thumb.jpg",
    category: "Mídia Digital",
    results: "1.2M de interações"
  },
  {
    id: 3,
    title: "Natal com Propósito",
    description: "Campanha integrada que uniu marketing e responsabilidade social.",
    video: "/portfolio/xmas-cause.mp4",
    thumbnail: "/portfolio/xmas-cause-thumb.jpg",
    category: "Social",
    results: "500K em doações"
  },
  {
    id: 4,
    title: "Lançamento Global App Z",
    description: "Estratégia de lançamento em 5 países com growth hacking.",
    video: "/portfolio/app-z.mp4",
    thumbnail: "/portfolio/app-z-thumb.jpg",
    category: "Performance",
    results: "1M+ downloads"
  },
  {
    id: 5,
    title: "Posicionamento de Luxo",
    description: "Reposicionamento de marca com foco em alto valor percebido.",
    video: "/portfolio/luxury.mp4",
    thumbnail: "/portfolio/luxury-thumb.jpg",
    category: "Branding",
    results: "70% aumento no ticket médio"
  },
  {
    id: 6,
    title: "Ativação em PDV",
    description: "Experiências imersivas em ponto de venda.",
    video: "/portfolio/pdv.mp4",
    thumbnail: "/portfolio/pdv-thumb.jpg",
    category: "Experiência",
    results: "180% aumento nas vendas"
  }
]

const CATEGORIES = ["Todos", "Branding", "Mídia Digital", "Social", "Performance", "Experiência"]

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
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-[#262728] to-[#3a3b3c] flex items-center justify-center">
        <motion.div
          className="relative text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#EEB23E] mb-4">Nosso Portfólio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cases reais em vídeo que demonstram nosso impacto criativo
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
              className={`rounded-full ${selectedCategory === category ? 'bg-[#EEB23E] hover:bg-[#d9a137] text-[#262728]' : 'border-[#262728] text-[#262728] hover:bg-[#EEB23E]/10'}`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Galeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full border border-gray-200">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                  {playingVideo === item.id ? (
                    <video 
                      src={item.video} 
                      controls 
                      autoPlay
                      className="w-full h-64 object-cover"
                      onEnded={() => setPlayingVideo(null)}
                    />
                  ) : (
                    <>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <button 
                        onClick={() => handlePlayVideo(item.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 group"
                      >
                        <div className="bg-[#EEB23E] p-4 rounded-full group-hover:scale-110 transition-transform">
                          <Play className="h-8 w-8 text-[#262728] fill-current" />
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#EEB23E]/10 text-[#262728] rounded-full text-xs font-medium mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#262728] mb-2">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-[#262728] mb-4">Quer resultados como esses para sua marca?</h3>
          <Button asChild className="bg-[#EEB23E] hover:bg-[#d9a137] text-[#262728]">
            <Link to="/contact">
              Fale Conosco
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
                <span className="inline-block px-3 py-1 bg-[#EEB23E]/10 text-[#262728] rounded-full text-xs font-medium mb-4">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-bold text-[#262728] mb-4">{selectedItem.title}</h3>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                
                <div className="bg-[#EEB23E]/10 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#262728] mb-2">Resultados:</h4>
                  <p className="text-[#262728]">{selectedItem.results}</p>
                </div>
                
                <Button className="w-full bg-[#EEB23E] hover:bg-[#d9a137] text-[#262728]">
                  Ver Case Completo
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}