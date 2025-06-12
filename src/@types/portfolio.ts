export type PortfolioCardProps = {
  id: number;
  title: string;
  description: string;
  video: string;
  thumbnail: string;
  category: "2D" | "3D" | string;
  results: string | number;
  playingVideo: number | null;
  handlePlayVideo: (id: number) => void;
  onVideoEnd: () => void;
};