
import React, { useState , useEffect} from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

import Navigation from './components/Navigation';
import './App.css';
import FetchMovies from './components/FetchMovies';

const App = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    let s = [{Poster:"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",Title : "Guardians of the Galaxy Vol. 2" ,Genre:"Action, Adventure, Comedy",Actors:"Chris Pratt, Zoe Saldana, Dave Bautista",Released :"05 May 2017",imdbRating:"7.6",Plot:"he Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",Language:"English",Director:"James Gunn"},
    {Poster:"https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",Title : "Batman: The Killing Joke" ,Genre:"Action",Actors:"Kevin Conroy",Released :"2016",imdbRating:"8.8",Plot:"As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.",Language:"English",Director:"Sam Liu"},
    {Poster:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",Title : "Inception" ,Genre:"Action, Adventure, Sci-Fi",Actors:"Leonardo DiCaprio,Cillian Murphy",Released :"16 Jul 2010",imdbRating:"8.8",Plot:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",Language:"English",Director:"Christopher Nolan"},
    {Poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",Title : "The Dark Knight" ,Genre:"Action, Crime, Drama",Actors:"Christian Bale, Heath Ledger, Aaron Eckhart",Released :"18 Jul 2008",imdbRating:"9.0",Plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",Language:"English, Mandarin",Director:"Christopher Nolan"}]
  
  setData(s);
    },[])
  const handleData = (data) =>{
    setData(data);
  }
  const h1Style = {
    textAlign: 'center',
    color: 'rgb(255,255,255)',
    fontSize: '36px',
    marginTop: '20px',
    marginBottom: '20px',
  };
  return (
    <div className="app">
      <Header />
      <Navigation />
      <div className="main-content">
       
        <FetchMovies moviesData={handleData} />
        {<h1 style={h1Style}>Popular Movies</h1>}
        {data && <MovieList movies={data} />}
        
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
