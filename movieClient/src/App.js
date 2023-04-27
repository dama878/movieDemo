
import './App.css';
import { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.css";
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';



function App() {
  const [movies, setMovies] =useState();
  const [movie, setMovie] =useState();
  const [reviews, setReviews] =useState();
  const getMovies =async() =>{
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data)
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
    
  }
  const getMovieData =async (movieId) => {
    try {
      const response =await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie =response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
      console.log(response.data)

    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(()=> {getMovies();},[])
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home movies={movies} />}></Route>
            <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
            <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
