
import { Article, BreakingNewsItem } from './types';

export const BREAKING_NEWS: BreakingNewsItem[] = [
  { id: 1, text: "Manchester United secures late victory against rivals in thrilling derby." },
  { id: 2, text: "World Cup Qualifiers: Unexpected upsets as minnows hold giants to a draw." },
  { id: 3, text: "NBA Playoffs: LeBron James drops 40 points in crucial Game 5 win." },
  { id: 4, text: "Cricket: Star all-rounder ruled out of upcoming series due to shoulder injury." },
  { id: 5, text: "Tennis: Young sensation reaches first Grand Slam final after grueling 5-set match." }
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "The Rise of Global Football: How Emerging Leagues are Changing the Game",
    category: "Football",
    description: "Traditional powerhouses are facing stiff competition from emerging markets as player transfers reach all-time highs.",
    image: "https://picsum.photos/seed/football1/800/600",
    date: "Oct 24, 2023",
    author: "James Wilson",
    featured: true
  },
  {
    id: 2,
    title: "Cricket Strategy: The Evolution of the Short Format Game",
    category: "Cricket",
    description: "T20 cricket has forced a complete rethink of batting techniques and bowling variations in the modern era.",
    image: "https://picsum.photos/seed/cricket1/800/600",
    date: "Oct 23, 2023",
    author: "Anita Sharma"
  },
  {
    id: 3,
    title: "NBA Season Preview: Who are the Genuine Contenders This Year?",
    category: "Basketball",
    description: "With several superstars switching teams, the championship race is wider open than it has been in decades.",
    image: "https://picsum.photos/seed/basketball1/800/600",
    date: "Oct 22, 2023",
    author: "Chris Miller",
    featured: true
  },
  {
    id: 4,
    title: "Tennis Court Mastery: Training Secrets of the World's Best",
    category: "Tennis",
    description: "Go behind the scenes of the grueling physical and mental preparation required to stay at the top of the ATP rankings.",
    image: "https://picsum.photos/seed/tennis1/800/600",
    date: "Oct 21, 2023",
    author: "Elena Petrova"
  },
  {
    id: 5,
    title: "Formula 1: The Technical Race Behind the Driver's Seat",
    category: "Other Sports",
    description: "Aerodynamics and hybrid technology are pushing the limits of what's possible on the race track.",
    image: "https://picsum.photos/seed/f1/800/600",
    date: "Oct 20, 2023",
    author: "Marc Webber"
  },
  {
    id: 6,
    title: "Underdog Stories: The Most Inspiring Comebacks in Sports History",
    category: "Other Sports",
    description: "Sometimes the heart matters more than the stats. We look at five athletes who defied all odds to win.",
    image: "https://picsum.photos/seed/underdog/800/600",
    date: "Oct 19, 2023",
    author: "Sarah Jenkins"
  },
  {
    id: 7,
    title: "The Mental Health Revolution in Professional Athletics",
    category: "All",
    description: "Top athletes are increasingly speaking out about the pressures of professional sport and the importance of mental well-being.",
    image: "https://picsum.photos/seed/health/800/600",
    date: "Oct 18, 2023",
    author: "Dr. Robert Fox"
  },
  {
    id: 8,
    title: "Champions League Power Rankings: Top Teams Analyzed",
    category: "Football",
    description: "As the group stages conclude, we rank the favorites to lift the most prestigious trophy in club football.",
    image: "https://picsum.photos/seed/cl/800/600",
    date: "Oct 17, 2023",
    author: "James Wilson"
  }
];
