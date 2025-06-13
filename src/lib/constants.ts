import { Palette, Video } from "lucide-react";
import Frame2 from "../assets/videos/Frame-2.mp4"
import Frame3 from "../assets/videos/Frame-3.mov"
import Frame4 from "../assets/videos/Frame-4.mov"
import Frame5 from "../assets/videos/Frame-5.mp4"
import Frame6 from "../assets/videos/Frame-6.mp4"
import Frame7 from "../assets/videos/Frame-7.mp4"
import Frame8 from "../assets/videos/Frame-8.mp4"
import Frame3D from "../assets/videos/Frame-9.mp4"
import Frame2_screen from "../assets/img/Frame-2_screen.png"
import Frame3_screen from "../assets/img/Frame-3_screen.png"
import Frame4_screen from "../assets/img/Frame-4_screen.png"
import Frame5_screen from "../assets/img/Frame-5_screen.png"
import Frame6_screen from "../assets/img/Frame-6_screen.png"
import Frame7_screen from "../assets/img/Frame-7_screen.png"
import Frame8_screen from "../assets/img/Frame-8_screen.png"
import Frame3D_screen from "../assets/img/Frame-9_screen.png"
import FrameDrusil from "../assets/img/Drusil Paulo.jpg"
import FrameEuritce from "../assets/img/Euritce Da Silva.jpg"

export const MemberData = [
  { nome: "Drusil Paulo", role: "CEO", image: FrameDrusil },
  { nome: "Euritce Da Silva", role: "Gestor de projetos", image: FrameEuritce },
]

export const PORTFOLIO_ITEMS = [
  {
    id: 2,
    title: "Produto em 3D Realista",
    description: "Modelagem 3D hiper-realista para lançamento de novo produto.",
    video: Frame2,
    thumbnail: Frame2_screen,
    category: "2D",
    results: "Aumento de 40% em intenção de compra"
  },
  {
    id: 3,
    title: "Explicativo 2D",
    description: "Vídeo explicativo animado para campanha educacional.",
    video: Frame3,
    thumbnail: Frame3_screen,
    category: "2D",
    results: "Retenção 78% maior que vídeos tradicionais"
  },
  {
    id: 4,
    title: "Ambiente 2D Imersivo",
    description: "Tour virtual 360° por ambiente corporativo.",
    video: Frame4,
    thumbnail: Frame4_screen,
    category: "2D",
    results: "Tempo médio de visualização: 4min32s"
  },
  {
    id: 5,
    title: "Motion Graphics 2D",
    description: "Sequência animada para abertura de programa de TV.",
    video: Frame5,
    thumbnail: Frame5_screen,
    category: "2D",
    results: "Viralizou com 2.5M de views"
  },
  {

    id: 6,
    title: "Animação 3D de Produto",
    description: "Animação 3D para lançamento de novo gadget tecnológico.",
    video: Frame6,
    thumbnail: Frame6_screen,
    category: "2D",
    results: "Aumento de 50% em pré-vendas"
  },
  {
    id: 7,
    title: "Vídeo Institucional 2D",
    description: "Vídeo institucional animado para empresa de tecnologia.",
    video: Frame7,
    thumbnail: Frame7_screen,
    category: "2D",
    results: "Aumento de 30% em reconhecimento de marca"
  },
  {
    id: 8,
    title: "Animação Interativa 3D",
    description: "Experiência interativa em 3D para evento corporativo.",
    video: Frame8,
    thumbnail: Frame8_screen,
    category: "2D",
    results: "Engajamento médio de 5min por usuário"
  }
  ,
  {
    id: 9,
    title: "Animação 3D de Produto",
    description: "Animação 3D de alta qualidade para lançamento de produto.",
    video: Frame3D,
    thumbnail: Frame3D_screen,
    category: "3D",
    results: "Aumento de 40% em intenção de compra"
  }
]

export const CATEGORIES = ["Todos", "2D", "3D"]

export const SERVICES_DETAILS = [
  {
    title: "Branding Completo",
    description: "Desenvolvemos identidades visuais poderosas que contam a história da sua marca",
    videoThumbnail: "/branding-video-thumb.jpg",
    videoUrl: "#branding-video",
    icon: Palette, // 🎨 ícone que representa design/identidade visual
    highlights: [
      "Criação de logotipo",
      "Manual da marca",
      "Diretrizes de aplicação",
      "Estratégia de posicionamento"
    ]
  },
  {
    title: "Produção de Vídeo",
    description: "Conteúdo audiovisual profissional que engaja e converte",
    videoThumbnail: "/video-video-thumb.jpg",
    videoUrl: "#video-video",
    icon: Video,
    highlights: [
      "Vídeos institucionais",
      "Motion graphics",
      "Campanhas publicitárias",
      "Edição profissional"
    ]
  }
];


export const PORTFOLIO_VIDEOS = [
  {
    title: "Relançamento da Marca Ventura",
    description: "Estratégia completa de rebranding para reposicionamento no mercado premium",
    thumbnail: "/case-ventura.jpg",
    videoUrl: "#ventura-video",
    category: "Branding"
  },
  {
    title: "Campanha Digital Estrelas",
    description: "Estratégia multicanal que aumentou engajamento em 320%",
    thumbnail: "/case-estrelas.jpg",
    videoUrl: "#estrelas-video",
    category: "Mídia Digital"
  },
  {
    title: "Série de Vídeos Corporativos",
    description: "Conteúdo institucional para fortalecimento da marca empregadora",
    thumbnail: "/case-corporate.jpg",
    videoUrl: "#corporate-video",
    category: "Produção de Vídeo"
  }
]

export const HISTORY_ITEMS = [
  {
    year: "2010",
    title: "Fundação da CriativaMente",
    description: "Nascimento da agência com uma pequena equipe de 5 profissionais apaixonados por criatividade e resultados",
    image: "/history/foundation.jpg"
  },
  {
    year: "2012",
    title: "Primeiro Grande Cliente",
    description: "Assinatura do contrato com a marca nacional Eleganza, nosso primeiro cliente de grande porte",
    image: "/history/first-client.jpg"
  },
  {
    year: "2015",
    title: "Expansão para o Digital",
    description: "Criação do departamento de mídias digitais e lançamento de nossas primeiras campanhas integradas",
    image: "/history/digital-expansion.jpg"
  },
  {
    year: "2017",
    title: "Prêmio de Criatividade",
    description: "Primeiro troféu no Festival Brasileiro de Publicidade pela campanha 'Memórias do Futuro'",
    image: "/history/award.jpg"
  },
  {
    year: "2020",
    title: "Pandemia e Reinvenção",
    description: "Adaptação para o trabalho remoto e lançamento bem-sucedido da plataforma de criação colaborativa",
    image: "/history/pandemic.jpg"
  },
  {
    year: "2023",
    title: "Escritório Internacional",
    description: "Abertura de nosso primeiro escritório fora do Brasil, em Lisboa, Portugal",
    image: "/history/international.jpg"
  }
];

export const menuItems = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Serviços",
    path: "/services",
  },
  {
    label: "Portfólio",
    path: "/portfolio"
  },
  {
    label: "Sobre Nós",
    path: "/about"
  },
  {
    label: "Blog",
    path: "/blog"
  }
]