export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}