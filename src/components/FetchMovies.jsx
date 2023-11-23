import React, { useState } from 'react';
import axios from 'axios';

const FetchMovies = ({ moviesData }) => {
  const [movieName, setmovieName] = useState();

  const handlemovieName = (e) => {
    setmovieName(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${movieName}&apikey=ed69961d`
      );
      console.log(response.data);
      moviesData([response.data]);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const buttonStyle = {
    backgroundColor: '#F5C518',
    color: '#000',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px', // Adjust this margin based on your design
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <label>Search</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Movie/Series'
          value={movieName}
          onChange={handlemovieName}
        />
      </div>
      <button style={buttonStyle} onClick={fetchData}>
        Get Movie Details
      </button>
    </div>
  );
};

export default FetchMovies;
