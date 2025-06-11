import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  const words = ["convertem", "engajam", "vendem", "comunicam"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false) // inicia fade-out
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setShow(true) // inicia fade-in
      }, 300) // tempo do fade-out
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center text-white overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-cinza_escuro/80 z-0"></div>

      {/* Conteúdo sobreposto */}
      <div className="container px-4 z-10 mx-16">
        <h1 className="text-4xl md:text-7xl font-bold text-dourado mb-6 md:max-w-5xl">
          Vídeos que conectam e {" "}
          <AnimatePresence mode="wait">
            {show && (
              <motion.span
                key={words[currentWordIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white"
              >
                {words[currentWordIndex]}.
              </motion.span>
            )}
          </AnimatePresence>
        </h1>

        <Button className="
          bg-dourado 
          text-cinza_escuro 
          hover:bg-[#d9a037] 
          rounded-full
          px-10
          py-6
          text-lg
          font-semibold
          shadow-lg
          hover:shadow-dourado/30
          transition-all
          duration-300
          transform
          hover:scale-105
          border-2
          border-dourado
          hover:border-[#d9a037]
          relative
          overflow-hidden
          group
        ">
          <span className="relative z-10">Assistir Reel</span>
          <span className="
            absolute 
            inset-0 
            bg-gradient-to-r 
            from-[#f0c266] 
            to-dourado 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            duration-300
            rounded-full
          "></span>
        </Button>
      </div>
    </section>
  )
}