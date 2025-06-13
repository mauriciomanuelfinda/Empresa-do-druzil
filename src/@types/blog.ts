import { BLOG_POSTS } from '../lib/constants'

export interface BlogPostCardProps {
  post: typeof BLOG_POSTS[0];
  index: number;
}