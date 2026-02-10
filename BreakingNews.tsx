
import React from 'react';
import { BREAKING_NEWS } from '../constants';

const BreakingNews: React.FC = () => {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden flex relative z-10">
      <div className="bg-red-700 px-4 font-bold uppercase tracking-wider whitespace-nowrap z-20 shadow-lg">
        Breaking News
      </div>
      <div className="whitespace-nowrap flex items-center breaking-ticker-animation">
        {BREAKING_NEWS.map((item) => (
          <span key={item.id} className="mx-8 font-semibold">
            • {item.text}
          </span>
        ))}
        {/* Duplicate for seamless looping */}
        {BREAKING_NEWS.map((item) => (
          <span key={`dup-${item.id}`} className="mx-8 font-semibold">
            • {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
