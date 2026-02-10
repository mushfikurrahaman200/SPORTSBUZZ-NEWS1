
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import HeroSlider from './components/HeroSlider';
import CategoryBar from './components/CategoryBar';
import ArticleCard from './components/ArticleCard';
import Footer from './components/Footer';
import { ARTICLES } from './constants';
import { Category } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(article => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <BreakingNews />
      <Header onSearch={setSearchQuery} />
      
      <main className="flex-grow">
        {/* Only show hero on home/all category without search */}
        {activeCategory === 'All' && !searchQuery && (
          <section className="mb-0">
            <HeroSlider articles={ARTICLES} />
          </section>
        )}

        <CategoryBar 
          activeCategory={activeCategory} 
          onSelect={setActiveCategory} 
        />

        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs">The Latest</span>
              <h2 className="text-3xl md:text-4xl font-oswald font-bold uppercase tracking-tight mt-1">
                {searchQuery ? `Search Results for "${searchQuery}"` : `${activeCategory} News Feed`}
              </h2>
            </div>
            <div className="text-sm font-semibold text-slate-500">
              Showing {filteredArticles.length} articles
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <i className="fas fa-search-minus text-6xl text-gray-200 mb-4"></i>
              <h3 className="text-2xl font-bold text-slate-700">No articles found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-6 bg-slate-900 text-white px-6 py-2 rounded font-bold uppercase"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Ad Placeholder / Featured Banner */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-slate-100 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
            <h4 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">Advertisement</h4>
            <div className="text-2xl font-oswald text-slate-400 uppercase italic">Your Sports Gear Brand Here</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
