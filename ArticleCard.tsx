
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full">
      <div className="relative overflow-hidden h-48 md:h-56">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase rounded">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
          <span><i className="far fa-calendar mr-1"></i> {article.date}</span>
          <span><i className="far fa-clock mr-1"></i> 5 min read</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors leading-snug">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img src={`https://i.pravatar.cc/150?u=${article.author}`} alt={article.author} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-semibold text-gray-700">{article.author}</span>
          </div>
          <button className="text-red-600 font-bold text-sm uppercase flex items-center group-hover:translate-x-1 transition-transform">
            Read More <i className="fas fa-arrow-right ml-2 text-xs"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
