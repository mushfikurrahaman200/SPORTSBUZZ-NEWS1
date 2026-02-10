
import React, { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    onSearch(val);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded transform -rotate-3">
              <i className="fas fa-bolt text-2xl"></i>
            </div>
            <h1 className="text-2xl md:text-3xl font-oswald font-bold tracking-tighter uppercase italic">
              Sports<span className="text-red-500">Buzz</span> <span className="text-slate-400 font-light">News</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-semibold uppercase tracking-wide text-sm">
            <a href="#" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#" className="hover:text-red-500 transition-colors">Trending</a>
            <a href="#" className="hover:text-red-500 transition-colors">Videos</a>
            <a href="#" className="hover:text-red-500 transition-colors">Scoreboard</a>
            <a href="#" className="hover:text-red-500 transition-colors">Podcasts</a>
          </nav>

          {/* Search & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Search news..." 
                value={searchVal}
                onChange={handleSearchChange}
                className="bg-slate-800 border-none rounded-full py-2 px-10 text-sm focus:ring-2 focus:ring-red-600 transition-all w-48 focus:w-64"
              />
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            </div>
            <button 
              className="lg:hidden text-2xl focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <a href="#" className="block py-2 border-b border-slate-700 font-bold">Home</a>
            <a href="#" className="block py-2 border-b border-slate-700 font-bold">Trending</a>
            <a href="#" className="block py-2 border-b border-slate-700 font-bold">Videos</a>
            <a href="#" className="block py-2 border-b border-slate-700 font-bold">Scoreboard</a>
            <div className="pt-2">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchVal}
                onChange={handleSearchChange}
                className="w-full bg-slate-700 border-none rounded-lg py-3 px-4"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
