
import React from 'react';
import { Article } from '../types';

interface HeroSliderProps {
  articles: Article[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ articles }) => {
  const featured = articles.filter(a => a.featured)[0] || articles[0];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-slate-900 group overflow-hidden">
      <img 
        src={featured.image} 
        alt={featured.title} 
        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase mb-4 tracking-widest rounded-sm">
              Featured Story
            </span>
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-4 leading-tight">
              {featured.title}
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-6 line-clamp-2 md:line-clamp-none">
              {featured.description}
            </p>
            <div className="flex items-center space-x-6">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold uppercase transition-colors shadow-lg shadow-red-600/20">
                Read Article
              </button>
              <div className="flex items-center text-slate-400 text-sm italic font-medium">
                <i className="far fa-user mr-2"></i> {featured.author}
                <span className="mx-3">•</span>
                <i className="far fa-calendar-alt mr-2"></i> {featured.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
