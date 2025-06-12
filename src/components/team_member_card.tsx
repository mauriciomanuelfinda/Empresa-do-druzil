import { motion } from "framer-motion";
import { User } from "lucide-react";
import { TeamMemberCardProps } from "@/@types/team_member";

export const TeamMemberCard = ({ image, name, role, delay = 0 }: TeamMemberCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
    >
      <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-dourado/20 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-10 h-10 text-dourado" />
        )}
      </div>

      <h3 className="text-lg font-semibold text-cinza_escuro">{name}</h3>
      <p className="text-sm text-dourado font-medium">{role}</p>
    </motion.div>
  );
};
