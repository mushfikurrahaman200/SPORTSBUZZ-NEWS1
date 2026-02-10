
import React from 'react';
import { Category } from '../types';

interface CategoryBarProps {
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ activeCategory, onSelect }) => {
  const categories: Category[] = ['All', 'Football', 'Cricket', 'Basketball', 'Tennis', 'Other Sports'];

  return (
    <div className="bg-white border-b border-gray-200 py-4 shadow-sm overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-4 flex justify-start md:justify-center items-center space-x-2 md:space-x-4 min-w-max">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-6 py-2 rounded-full font-bold uppercase text-xs tracking-wider transition-all whitespace-nowrap ${
              activeCategory === cat 
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 ring-2 ring-red-600 ring-offset-2' 
                : 'text-slate-600 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
