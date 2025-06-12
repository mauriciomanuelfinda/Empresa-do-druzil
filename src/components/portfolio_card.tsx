import { PortfolioCardProps } from "@/@types/portfolio";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const PortfolioCard = ({
  id,
  title,
  description,
  video,
  thumbnail,
  category,
  results,
  playingVideo,
  handlePlayVideo,
  onVideoEnd,
}: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className="cursor-pointer"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full border border-gray-200">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
          {playingVideo === id ? (
            <video
              src={video}
              controls
              autoPlay
              className="w-full h-64 object-cover"
              onEnded={onVideoEnd}
            />
          ) : (
            <>
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <button
                onClick={() => handlePlayVideo(id)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 group"
              >
                <div className="bg-[#EEB23E] p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-[#262728] fill-current" />
                </div>
                {category === "3D" && (
                  <span className="absolute bottom-4 left-4 bg-[#262728] text-white text-xs px-2 py-1 rounded">
                    3D
                  </span>
                )}
                {category === "2D" && (
                  <span className="absolute bottom-4 left-4 bg-[#EEB23E] text-[#262728] text-xs px-2 py-1 rounded">
                    2D
                  </span>
                )}
              </button>
            </>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#262728] mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-2 mb-3">{description}</p>
          <div className="flex justify-between items-center">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                category === "2D"
                  ? "bg-[#EEB23E]/20 text-[#EEB23E]"
                  : "bg-[#262728]/20 text-[#262728]"
              }`}
            >
              {category}
            </span>
            <span className="text-xs text-gray-500">Resultado: {results}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
