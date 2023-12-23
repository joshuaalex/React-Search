import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieCard } from './components/MovieCard/MovieCard';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const fetchMovies = async (searchQuery) => {
    try {
      const { data } = await axios.get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=6451d5a9`);
      if (data && data.Search) {
        setMovies(data.Search);
        console.log(data.Search);
      } else {
        setMovies([]);
      }
      setError(null);
    } catch (error) {
      setError('Error fetching movies. Please try again.');
      setMovies([]);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchMovies(searchTerm);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <header className='header'>
        <h1 className='heading-1'>Movies</h1>
      </header>
      <div className="search-container">
        <input
          className='search-input'
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {error && <p>{error}</p>}
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
