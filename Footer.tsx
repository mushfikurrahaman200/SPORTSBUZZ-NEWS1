
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-oswald font-bold text-white uppercase italic">
              Sports<span className="text-red-500">Buzz</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Delivering the most accurate and up-to-date sports news from across the globe. From the pitch to the court, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold uppercase mb-6 tracking-widest text-sm border-b border-red-600 pb-2 inline-block">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Football News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NBA Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cricket Match Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tennis Grand Slams</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Golf Tournaments</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase mb-6 tracking-widest text-sm border-b border-red-600 pb-2 inline-block">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advertise with Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold uppercase mb-6 tracking-widest text-sm border-b border-red-600 pb-2 inline-block">Newsletter</h3>
            <p className="text-sm mb-4">Get the top headlines delivered straight to your inbox every morning.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none px-4 py-2 rounded-l w-full text-sm focus:ring-1 focus:ring-red-600 outline-none"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>© {new Date().getFullYear()} SportsBuzz News Media. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
