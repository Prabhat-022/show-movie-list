import './App.css';
import { Routes, Route  } from 'react-router-dom';
import Index from './Layout/Index';
import MovieFilter from './component/MovieFilter';
import MovieDetailsPage from './component/MovieDetailsPage';
import {data} from './data.js'
import Movie from './pages/Movie';
import Series from './pages/Series';
import Trending from './pages/Trending';
import { useEffect, useState } from 'react';
import axios from 'axios';

const api_key = import.meta.env.VITE_tmdb_api_key;
console.log(api_key);


function App() {
  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([]);
  const [trending, setTrending] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,{
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_access_token}`
        }
      });
      const data = await response.data;
      setMovie(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`,{
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_access_token}`
        }
      });
      const data = await response.data;
      setSeries(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=2`,{
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_access_token}`
        }
      });
      const data = await response.data;

      console.log("trending",data)
      setTrending(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} >
          <Route index element={<MovieFilter  data={data}/>} />
          <Route path="/movies" element={<Movie movie={movie}/>} />
          <Route path="/series" element={<Series movie={series}/>} />
          <Route path="/trending" element={<Trending movie={trending}/>} />
          <Route path="/movie/:id" element={<MovieDetailsPage  />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
