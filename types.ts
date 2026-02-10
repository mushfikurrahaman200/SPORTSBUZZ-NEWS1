
export type Category = 'All' | 'Football' | 'Cricket' | 'Basketball' | 'Tennis' | 'Other Sports';

export interface Article {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  date: string;
  author: string;
  featured?: boolean;
}

export interface BreakingNewsItem {
  id: number;
  text: string;
}
