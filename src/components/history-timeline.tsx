import { HISTORY_ITEMS } from "@/lib/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function HistoryTimeline() {
  return (
    <div className="relative py-12">
      {/* Linha do tempo */}
      <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-dourado to-[#d9a037] md:left-1/2 md:-ml-0.5"></div>

      <div className="space-y-16">
        {HISTORY_ITEMS.map((item, index) => {
          const isEven = index % 2 === 0
          const direction = isEven ? -100 : 100

          return (
            <div key={index} className={`relative flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
              <motion.div
                initial={{ opacity: 0, x: direction }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`md:w-1/2 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
              >
                <div className="relative">
                  {/* Marcador da linha do tempo */}
                  <div className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-white border-4 border-dourado shadow-md md:-right-10 md:left-auto"></div>
                  
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="p-0">
                      <div className="h-48 bg-[#f5f5f5] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-cinza_escuro/70 to-transparent"></div>
                        <CardTitle className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                          {item.year}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 pb-8 px-6">
                      <h4 className="font-bold text-lg text-dourado mb-2">{item.title}</h4>
                      <p className="text-[#666] leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Marcador final */}
      <div className="relative">
        <div className="absolute left-4 -bottom-6 w-6 h-6 rounded-full bg-white border-4 border-[#d9a037] shadow-md md:left-1/2 md:-ml-3"></div>
        <div className="text-center pt-12 text-dourado font-medium">
          E a nossa história continua...
        </div>
      </div>
    </div>
  )
}