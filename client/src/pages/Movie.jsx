

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Filter, Star, Calendar, Globe, Languages } from 'lucide-react';

const Movie = ({ movie }) => {
    const data = movie.results;

    const [languageFilter, setLanguageFilter] = useState('');
    const [countryFilter, setCountryFilter] = useState('');
    const [genreFilter, setGenreFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10;

    // Extract unique languages, countries, and genres from the data
    const allLanguages = [...new Set(data.flatMap(movie => movie.movielanguages || []))];
    const allCountries = [...new Set(data.flatMap(movie => movie.moviecountries || []))];
    const allGenres = [...new Set(data.flatMap(movie => movie.moviegenres || []))];

    // Filter movies based on selected filters
    const filteredMovies = data.filter((movie) => {
        const languageMatch = languageFilter ? (movie.movielanguages || []).includes(languageFilter) : true;
        const countryMatch = countryFilter ? (movie.moviecountries || []).includes(countryFilter) : true;
        const genreMatch = genreFilter ? (movie.moviegenres || []).includes(genreFilter) : true;

        return languageMatch && countryMatch && genreMatch;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
    const navigate = useNavigate();

    // Reset to first page when filters change
    const handleFilterChange = (setter, value) => {
        setter(value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const clearAllFilters = () => {
        setLanguageFilter('');
        setCountryFilter('');
        setGenreFilter('');
        setCurrentPage(1);
    };

    const showMovieDetails = (movie) => {
        navigate(`/`);
        // return <MovieDetailsPage movie={movie} />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">


            {/* Filters Section */}
            <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-700">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-center mb-4">
                        <Filter className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-white font-semibold">Filters</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="relative">
                            <Languages className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select
                                value={languageFilter}
                                onChange={(e) => handleFilterChange(setLanguageFilter, e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800/90 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none cursor-pointer hover:bg-gray-700/90 transition-colors"
                            >
                                <option value="">All Languages</option>
                                {allLanguages.map((language) => (
                                    <option key={language} value={language}>{language}</option>
                                ))}
                            </select>
                        </div>

                        <div className="relative">
                            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select
                                value={countryFilter}
                                onChange={(e) => handleFilterChange(setCountryFilter, e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800/90 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none cursor-pointer hover:bg-gray-700/90 transition-colors"
                            >
                                <option value="">All Countries</option>
                                {allCountries.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>

                        <div className="relative">
                            <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select
                                value={genreFilter}
                                onChange={(e) => handleFilterChange(setGenreFilter, e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800/90 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none cursor-pointer hover:bg-gray-700/90 transition-colors"
                            >
                                <option value="">All Genres</option>
                                {allGenres.map((genre) => (
                                    <option key={genre} value={genre}>{genre}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={clearAllFilters}
                            className="px-4 py-3 bg-red-600/80 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                        >
                            Clear All
                        </button>
                    </div>

                    {/* Results Count */}
                    <div className="text-center mt-4">
                        <span className="text-gray-300">
                            Showing {currentMovies.length} of {filteredMovies.length} movies
                            {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
                        </span>
                    </div>
                </div>
            </div>

            {/* Movies Grid */}
            <div className="container mx-auto px-4 py-8">
                {currentMovies.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🎬</div>
                        <h3 className="text-xl text-white mb-2">No movies found</h3>
                        <p className="text-gray-400">Try adjusting your filters</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                        {currentMovies.map((movie, index) => (
                            <div
                                key={movie.id || index}
                                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                                onClick={() => showMovieDetails(movie)}
                            >
                                {/* Movie Poster */}
                                <div className="relative aspect-[2/3] overflow-hidden bg-gray-700">
                                    {movie.backdrop_path ? (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                            alt={movie.original_title || 'Movie poster'}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className="absolute inset-0 bg-gray-600 flex items-center justify-center text-gray-400 hidden">
                                        <Calendar className="w-12 h-12" />
                                    </div>

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Movie Info */}
                                <div className="p-4 space-y-3">
                                    {/* Title */}
                                    <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 group-hover:text-blue-400 transition-colors">
                                        {movie.original_title || 'Untitled Movie'}
                                    </h3>

                                    {/* Languages */}
                                    {movie.movielanguages && movie.movielanguages.length > 0 && (
                                        <div className="space-y-1">
                                            <p className="text-gray-400 text-sm font-medium flex items-center">
                                                <Languages className="w-3 h-3 mr-1" />
                                                Languages
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {movie.movielanguages.slice(0, 3).map((language) => (
                                                    <span
                                                        key={language}
                                                        className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30"
                                                    >
                                                        {language}
                                                    </span>
                                                ))}
                                                {movie.movielanguages.length > 3 && (
                                                    <span className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full">
                                                        +{movie.movielanguages.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Countries */}
                                    {movie.moviecountries && movie.moviecountries.length > 0 && (
                                        <div className="space-y-1">
                                            <p className="text-gray-400 text-sm font-medium flex items-center">
                                                <Globe className="w-3 h-3 mr-1" />
                                                Countries
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {movie.moviecountries.slice(0, 2).map((country) => (
                                                    <span
                                                        key={country}
                                                        className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30"
                                                    >
                                                        {country}
                                                    </span>
                                                ))}
                                                {movie.moviecountries.length > 2 && (
                                                    <span className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full">
                                                        +{movie.moviecountries.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Genres */}
                                    {movie.moviegenres && movie.moviegenres.length > 0 && (
                                        <div className="space-y-1">
                                            <p className="text-gray-400 text-sm font-medium flex items-center">
                                                <Star className="w-3 h-3 mr-1" />
                                                Genres
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {movie.moviegenres.slice(0, 2).map((genre) => (
                                                    <span
                                                        key={genre}
                                                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                                                    >
                                                        {genre}
                                                    </span>
                                                ))}
                                                {movie.moviegenres.length > 2 && (
                                                    <span className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full">
                                                        +{movie.moviegenres.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center mt-12 space-x-2">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="flex items-center px-4 py-2 bg-gray-800/80 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors border border-gray-600"
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Previous
                        </button>

                        <div className="flex space-x-1">
                            {[...Array(Math.min(5, totalPages))].map((_, index) => {
                                let page;
                                if (totalPages <= 5) {
                                    page = index + 1;
                                } else if (currentPage <= 3) {
                                    page = index + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    page = totalPages - 4 + index;
                                } else {
                                    page = currentPage - 2 + index;
                                }

                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`px-3 py-2 rounded-lg transition-colors border ${currentPage === page
                                            ? 'bg-blue-600 text-white border-blue-500'
                                            : 'bg-gray-800/80 hover:bg-gray-700 text-gray-300 border-gray-600'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="flex items-center px-4 py-2 bg-gray-800/80 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors border border-gray-600"
                        >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Movie;
