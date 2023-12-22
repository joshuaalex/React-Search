import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieCard } from './components/MovieCard/MovieCard';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get("http://www.omdbapi.com/?s=guardians&apikey=6451d5a9"); 
        if (data && data.Search) {
          setMovies(data.Search); 
          // console.log(data);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>Movies</h1>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default App;
