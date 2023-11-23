
import React, { useEffect } from 'react';
import './MovieList.css';

const MovieList = ({movies}) => {
  // Mock data for movie list

useEffect(()=>{
movies = [{Title : "ABC" ,Genre:"",Released :"",imdbRating:"",Plot:""},
{Title : "ABC" ,Genre:"",Released :"",imdbRating:"",Plot:""},
{Title : "ABC" ,Genre:"",Released :"",imdbRating:"",Plot:""},
{Title : "ABC" ,Genre:"",Released :"",imdbRating:"",Plot:""}]
},[])
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src = {movie.Poster} style={{background:"black",height:"150px",width:"140px" , borderColor:'white',borderRadius:'1px'}}  />
          <h3>{movie.Title}</h3>
          <h6>Genre: {movie.Genre}</h6>
          <h6>Actors: {movie.Actors}</h6>
          <h6>Released Date: {movie.Released}</h6>
          <h6>Rating: {movie.imdbRating}</h6>
          <h6>Plot: {movie.Plot}</h6>
          <h6>Language: {movie.Language}</h6>
          <h6>Director: {movie.Director}</h6>
          
        </div>
      ))}
    </div>
  );
};

export default MovieList;
