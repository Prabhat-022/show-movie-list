import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <>
      {/* Main Footer */}
      <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-purple-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-300 rounded-full animate-ping"></div>
          <div className="absolute top-20 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-indigo-300 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-40 right-10 w-1 h-1 bg-pink-300 rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Top glow effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"></div>

        {/* Glassmorphism overlay */}
        <div className="relative backdrop-blur-sm bg-white/5 border-t border-white/10">
          <div className="container mx-auto px-6 py-12">
            
            {/* Main Footer Content */}
            <div className="flex flex-col space-y-12 mb-12">
              
              {/* Brand Section - Always full width and centered */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.8 3.4 14.6 3.3 14.3 3.3H9.7C9.4 3.3 9.2 3.4 9 3.5L3 7V9H21ZM3 10V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10H3ZM7.5 12C8.3 12 9 12.7 9 13.5S8.3 15 7.5 15 6 14.3 6 13.5 6.7 12 7.5 12ZM16.5 12C17.3 12 18 12.7 18 13.5S17.3 15 16.5 15 15 14.3 15 13.5 15.7 12 16.5 12Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    CineMagic
                  </h3>
                </div>
                <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-md mx-auto">
                  Your ultimate destination for premium streaming entertainment. Discover thousands of movies and series.
                </p>
                <div className="flex justify-center space-x-4">
                  {/* Social Media Icons */}
                  <button className="p-2 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="p-2 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </button>
                  <button className="p-2 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z"/>
                    </svg>
                  </button>
                  <button className="p-2 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.527,2.495c3.61,0,6.522,2.91,6.522,6.498c0,2.866-1.875,5.306-4.475,6.198v-4.39h1.245l0.239-1.53h-1.484v-0.99c0-0.418,0.205-0.827,0.863-0.827h0.668v-1.302c0,0-0.607-0.103-1.186-0.103c-1.21,0-2,0.73-2,2.054v1.169h-1.346v1.30h1.346v4.39c-2.6-0.892-4.475-3.332-4.475-6.198C6.005,5.405,8.917,2.495,12.527,2.495z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Links - Responsive Layout */}
              <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start lg:space-x-16 space-y-8 lg:space-y-0">
                {/* Quick Links */}
                <div className="text-center lg:text-left">
                  <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
                  <ul className="flex flex-col items-center lg:items-start space-y-3">
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">Home</button></li>
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">Movies</button></li>
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">TV Series</button></li>
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">Trending</button></li>
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">My Watchlist</button></li>
                  </ul>
                </div>

                {/* Categories */}
                <div className="text-center lg:text-left">
                  <h4 className="text-white font-semibold text-lg mb-4">Categories</h4>
                  <ul className="flex flex-col items-center lg:items-start space-y-3">
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">Action</button></li>
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">Comedy</button></li>
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">Drama</button></li>
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">Sci-Fi</button></li>
                    <li><button className="text-white/70 hover:text-purple-300 transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">Thriller</button></li>
                  </ul>
                </div>
              </div>

              {/* Newsletter - Always centered */}
              <div className="text-center max-w-md mx-auto">
                <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
                <p className="text-white/70 text-sm mb-4">
                  Get the latest movies and exclusive content delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="border-t border-white/10 pt-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-medium">4K Ultra HD</h5>
                    <p className="text-white/60 text-sm">Crystal clear quality</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-medium">24/7 Streaming</h5>
                    <p className="text-white/60 text-sm">Watch anytime, anywhere</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-medium">No Ads</h5>
                    <p className="text-white/60 text-sm">Uninterrupted experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex flex-wrap items-center space-x-6 text-sm text-white/60">
                <button className="hover:text-purple-300 transition-colors duration-300 bg-transparent border-none cursor-pointer">Privacy Policy</button>
                <button className="hover:text-purple-300 transition-colors duration-300 bg-transparent border-none cursor-pointer">Terms of Service</button>
                <button className="hover:text-purple-300 transition-colors duration-300 bg-transparent border-none cursor-pointer">Support</button>
                <button className="hover:text-purple-300 transition-colors duration-300 bg-transparent border-none cursor-pointer">Contact Us</button>
              </div>
              
              <div className="text-white/60 text-sm">
                <p>&copy; 2025 CineMagic. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom particles */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default Footer;