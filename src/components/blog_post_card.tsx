// components/BlogPostCard.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BlogPostCardProps } from "@/@types/blog";

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
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
          <span className="text-xs text-gray-500">
            {post.date} • {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-cinza_escuro mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Button variant="link" className="p-0 text-dourado hover:text-[#d9a137]">
          Continuar Lendo →
        </Button>
      </div>
    </motion.div>
  );
}