import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Course } from "@/lib/constants"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          {/* Fundo neutro com leve tom laranja */}
          <div className="h-40 bg-orange-100 rounded-t-lg flex items-center justify-center">
            {/* Letra inicial em laranja forte */}
            <span className="text-orange-600 text-4xl font-bold">
              {course.charAt(0)}
            </span>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          {/* Título em cinza escuro com leve destaque */}
          <CardTitle className="mb-4 text-gray-800">{course}</CardTitle>
          {/* Link com laranja somente no hover */}
          <Button 
            variant="link" 
            onClick={() => navigate("/cursos")} 
            className="p-0 text-gray-600 hover:text-orange-500 transition-colors"
          >
            Saiba mais →
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
