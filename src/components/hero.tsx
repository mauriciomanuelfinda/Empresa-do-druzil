import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const words = ["inspiram", "emocionam", "transformam", "conectam"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setShow(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center text-white overflow-hidden">
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
      <div className="absolute inset-0 bg-cinza_escuro/80 z-0" />

      {/* Conteúdo sobreposto */}
      <div className="container px-6 md:px-16 z-10 mx-auto flex flex-col items-start md:items-start justify-center gap-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-dourado leading-tight">
          Vídeos que{" "}
          <AnimatePresence mode="wait">
            {show && (
              <motion.span
                key={words[currentWordIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white inline-block"
              >
                {words[currentWordIndex]}.
              </motion.span>
            )}
          </AnimatePresence>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-white/80 max-w-xl mx-auto md:mx-0">
          Conte histórias que tocam, criam conexões reais e deixam sua marca no mundo.
        </p>

        <div className="w-full md:w-auto">
          <Button
            className="
              bg-dourado 
              text-cinza_escuro 
              hover:bg-[#d9a037] 
              rounded-full
              px-8 sm:px-10
              py-4 sm:py-6
              text-base sm:text-lg
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
              w-full sm:w-auto
            "
          >
            <span className="relative z-10">Conheça nosso portfólio de soluções</span>
            <span
              className="
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
              "
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
