import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { data } from '../data.js'
console.log("data", data);

const MovieDetailsPage = () => {
  // console.log('movie', movie);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  const { id } = useParams();

  const movieData = data.find(movie => movie.imdbmovieid === id);

  console.log("movie", movieData);

  // Sample movie data
  // const movieData = {
  //   movietitle: "Interstellar",
  //   poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
  //   backdrop: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&h=600&fit=crop",
  //   rating: 8.6,
  //   year: 2014,
  //   duration: "2h 49min",
  //   moviegenres: ["Sci-Fi", "Drama", "Adventure"],
  //   director: "Christopher Nolan",
  //   cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
  //   description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  //   releaseDate: "November 7, 2014",
  //   movielanguages: "English",
  //   "moviecountries": [
  //     "Australia",
  //     "Canada",
  //     "Germany",
  //     "France",
  //     "France",
  //     "United Kingdom",
  //     "Ireland",
  //     "India",
  //     "Norway",
  //     "United States"
  //   ],
  //   moviemainphotos: [
  //     "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop"
  //   ],
  //   budget: "$165 million",
  //   boxOffice: "$677.5 million"
  // };

  const toggleTrailer = () => {
    setIsTrailerPlaying(!isTrailerPlaying);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleWatchlist = () => {
    setIsWatchlisted(!isWatchlisted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-10 w-3 h-3 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-indigo-300 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-32 right-10 w-1 h-1 bg-pink-300 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Backdrop Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={movieData.backdrop}
          alt="Movie backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-purple-900"></div>
      </div>

      {/* Main Content */}
      <div className="relative backdrop-blur-sm bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-8 lg:py-12">

          {/* Back Button */}
          <button className="mb-6 flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 bg-transparent border-none cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>
              <Link to="/">Back to Movies</Link>
            </span>
          </button>

          {/* Movie Details Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Left Side - Movie Poster */}
            <div className="lg:col-span-1">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={movieData.moviemainphotos[0]}
                    alt={movieData.movietitle}
                    className="w-full h-auto aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay with Play Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={toggleTrailer}
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

                {/* Rating Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                  ⭐ {movieData.rating}
                </div>
              </div>

              {/* Mobile Action Buttons - Show only on small screens */}
              <div className="mt-6 flex lg:hidden space-x-3">
                <button
                  onClick={toggleFavorite}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isFavorite
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                >
                  {isFavorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
                </button>
                <button
                  onClick={toggleWatchlist}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isWatchlisted
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                >
                  {isWatchlisted ? '✓ Watchlisted' : '+ Watchlist'}
                </button>
              </div>
            </div>

            {/* Right Side - Movie Information */}
            <div className="lg:col-span-2 space-y-6">

              {/* Title and Basic Info */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  {movieData.movietitle}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-white/70">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span>{movieData.rating}/10</span>
                  </span>
                  <span>•</span>
                  <span>{movieData.year}</span>
                  <span>•</span>
                  <span>{movieData.duration}</span>
                  <span>•</span>
                  <span>{movieData.language}</span>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-2">
                  {movieData.moviegenres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-200 text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-white">Overview</h2>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {movieData.description}
                </p>
              </div>

              {/* Cast and Crew */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Director</h3>
                  <p className="text-purple-200">{movieData.director}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cast</h3>
                  <div className="space-y-1">
                    {movieData.cast.slice(0, 4).map((actor, index) => (
                      <p key={index} className="text-white/70 text-sm">{actor}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-center">
                  <p className="text-white/60 text-xs uppercase tracking-wide">Release Date</p>
                  <p className="text-white font-medium text-sm mt-1">{movieData.releaseDate}</p>
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-xs uppercase tracking-wide">Budget</p>
                  <p className="text-white font-medium text-sm mt-1">{movieData.budget}</p>
                </div>
                <div className="text-center col-span-2 sm:col-span-1">
                  <p className="text-white/60 text-xs uppercase tracking-wide">Box Office</p>
                  <p className="text-white font-medium text-sm mt-1">{movieData.boxOffice}</p>
                </div>
              </div>

              {/* Desktop Action Buttons */}
              <div className="hidden lg:flex space-x-4">
                <button
                  onClick={toggleTrailer}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Trailer</span>
                </button>

                <button
                  onClick={toggleFavorite}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${isFavorite
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                >
                  <span>{isFavorite ? '❤️' : '🤍'}</span>
                  <span>{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
                </button>

                <button
                  onClick={toggleWatchlist}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${isWatchlisted
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                >
                  <span>{isWatchlisted ? '✓' : '+'}</span>
                  <span>{isWatchlisted ? 'Watchlisted' : 'Add to Watchlist'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Related Movies Section */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={`https://images.unsplash.com/photo-${1440404653325 + item}-ab127d49abc1?w=200&h=300&fit=crop`}
                      alt={`Related movie ${item}`}
                      className="w-full h-auto aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium truncate">Movie Title {item}</p>
                      <p className="text-xs text-white/70">2024 • ⭐ 8.{item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      {isTrailerPlaying && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={toggleTrailer}
              className="absolute -top-12 right-0 text-white hover:text-purple-300 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-black rounded-lg flex items-center justify-center">
              <p className="text-white text-lg">Trailer would play here</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;