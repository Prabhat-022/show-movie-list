
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Gradient background with animated particles */}
      <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-20">z

          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-purple-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-20 w-3 h-3 bg-blue-300 rounded-full animate-ping"></div>
          <div className="absolute top-32 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-indigo-300 rounded-full animate-bounce delay-500"></div>
        </div>

        {/* Glassmorphism overlay */}
        <div className="relative backdrop-blur-sm bg-white/5 border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            
            {/* Mobile Header */}
            <div className="flex lg:hidden items-center justify-between">
              {/* Logo/Title Section - Mobile */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.8 3.4 14.6 3.3 14.3 3.3H9.7C9.4 3.3 9.2 3.4 9 3.5L3 7V9H21ZM3 10V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10H3ZM7.5 12C8.3 12 9 12.7 9 13.5S8.3 15 7.5 15 6 14.3 6 13.5 6.7 12 7.5 12ZM16.5 12C17.3 12 18 12.7 18 13.5S17.3 15 16.5 15 15 14.3 15 13.5 15.7 12 16.5 12Z"/>
                  </svg>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  CineMagic
                </h1>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-white hover:text-purple-300 transition-colors duration-300 z-50 relative"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block">
              {/* Logo/Title Section - Desktop */}
              <div className="text-center mb-6">
                <div 
                  className="inline-flex items-center space-x-3 cursor-pointer transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Movie icon */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.8 3.4 14.6 3.3 14.3 3.3H9.7C9.4 3.3 9.2 3.4 9 3.5L3 7V9H21ZM3 10V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10H3ZM7.5 12C8.3 12 9 12.7 9 13.5S8.3 15 7.5 15 6 14.3 6 13.5 6.7 12 7.5 12ZM16.5 12C17.3 12 18 12.7 18 13.5S17.3 15 16.5 15 15 14.3 15 13.5 15.7 12 16.5 12Z"/>
                      </svg>
                    </div>
                    {isHovered && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-wide">
                    CineMagic
                  </h1>
                  
                  {/* Subtitle */}
                  <div className="text-purple-200 text-xs sm:text-sm font-light tracking-widest">
                    STREAMING
                  </div>
                </div>
                
                {/* Tagline */}
                <p className="text-white/70 text-xs sm:text-sm mt-3 font-light tracking-wide">
                  Discover • Watch • Experience
                </p>
              </div>

              {/* Desktop Navigation */}
              <div className="flex items-center justify-between">
                
                {/* Navigation Links */}
                <nav className="flex items-center space-x-8">
                  <button 
                    onClick={() => navigate('/')}
                    className="relative text-white font-medium transition-all duration-300 hover:text-purple-300 group cursor-pointer"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <button 
                    onClick={() => navigate('/movies')}
                    className="relative text-white/70 font-medium transition-all duration-300 hover:text-purple-300 group cursor-pointer bg-transparent border-none"
                  >
                    Movies
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <button 
                    onClick={() => navigate('/series')}
                    className="relative text-white/70 font-medium transition-all duration-300 hover:text-purple-300 group cursor-pointer bg-transparent border-none"
                  >
                    Series
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <button 
                    onClick={() => navigate('/trending')}
                    className="relative text-white/70 font-medium transition-all duration-300 hover:text-purple-300 group cursor-pointer bg-transparent border-none"
                  >
                    Trending
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </nav>

                {/* Desktop Action Buttons */}
                <div className="flex items-center space-x-4">
                  {/* Search Icon */}
                  <button className="p-2 text-white/70 hover:text-white transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>

                  {/* Login Button */}
                  <button className="px-4 lg:px-6 py-2.5 text-sm lg:text-base text-white font-medium border border-white/30 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Login
                  </button>

                  {/* Signup Button */}
                  <button className="px-4 lg:px-6 py-2.5 text-sm lg:text-base text-white font-medium bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-600">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          ></div>
        )}

        {/* Mobile Menu Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 backdrop-blur-lg border-l border-white/10 transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.8 3.4 14.6 3.3 14.3 3.3H9.7C9.4 3.3 9.2 3.4 9 3.5L3 7V9H21ZM3 10V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10H3ZM7.5 12C8.3 12 9 12.7 9 13.5S8.3 15 7.5 15 6 14.3 6 13.5 6.7 12 7.5 12ZM16.5 12C17.3 12 18 12.7 18 13.5S17.3 15 16.5 15 15 14.3 15 13.5 15.7 12 16.5 12Z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                CineMagic
              </h2>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-white/70 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="py-6">
            <div className="px-6 space-y-1">
              <button 
                onClick={() => {
                  navigate('/');
                  closeMobileMenu();
                }}
                className="w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border-none bg-transparent"
              >
                🏠 Home
              </button>
              <button 
                onClick={() => {
                  navigate('/movies');
                  closeMobileMenu();
                }}
                className="w-full text-left px-4 py-3 text-white/80 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300 border-none bg-transparent"
              >
                  🎬 Movies
              </button>
              <button 
                onClick={() => {
                  navigate('/series');
                  closeMobileMenu();
                }}
                className="w-full text-left px-4 py-3 text-white/80 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300 border-none bg-transparent"
              >
                📺 Series
              </button>
              <button 
                onClick={() => {
                    navigate('/trending');
                  closeMobileMenu();
                }}
                className="w-full text-left px-4 py-3 text-white/80 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300 border-none bg-transparent"
              >
                🔥 Trending
              </button>
            </div>

            {/* Search Section */}
            <div className="px-6 mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies, series..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="px-6 mt-8 space-y-3">
              <button className="w-full px-4 py-3 text-white font-medium border border-white/30 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-purple-300 transition-all duration-300">
                Login
              </button>
              <button className="w-full px-4 py-3 text-white font-medium bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Sign Up
              </button>
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
            <p className="text-white/60 text-xs text-center">
              Discover • Watch • Experience
            </p>
          </div>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"></div>
      </div>
    </>
  );
};

export default Header;