import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceCardProps } from "@/@types/service";

export const ServiceCard = ({
  title,
  description,
  highlights,
  delay = 0,
  icon: Icon
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 group border border-dourado hover:shadow-xl transition-shadow h-full"
    >
      {Icon && (
        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-dourado/10 text-dourado">
          <Icon className="w-6 h-6" />
        </div>
      )}

      <h3 className="text-xl font-bold text-cinza_escuro mb-2">{title}</h3>
      <p className="text-[#666] mb-4">{description}</p>

      {highlights && (
        <ul className="space-y-2 mb-4">
          {highlights.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-dourado mr-2">•</span>
              <span className="text-[#444]">{item}</span>
            </li>
          ))}
        </ul>
      )}

      <Button
        variant="outline"
        className="border-dourado text-dourado hover:bg-dourado/10 w-full"
      >
        Detalhes do Serviço
      </Button>
    </motion.div>
  );
};
