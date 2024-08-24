import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

// MovieList component displays a list of movies.
const MovieList = () => {
    // State to store the list of movies   
    const [movies, setMovies] = useState([]);

    // Implementing the useEffect hook to simulate the fetching of movie data when the component mounts.
    useEffect(() => {
        // Sample movie data, typically this would come from an API
        const movie_data = [{
            Title: "Batman Begins",
            Year: "2005",
            imdbID: "tt0372784",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        }];
        
        // Setting the movie data to the state variable 'movies'
        setMovies(movie_data);
    }, []);

    return (
        <div className="container">
            <h1>Movies</h1>
            <div className="movie-list">
                {/* Conditional rendering: if movies array has elements, display the list of movies, otherwise show a message */}
                {movies.length > 0 ? (
                    // Mapping over the movies array to create a card for each movie.
                    movies.map(movie => (
                        <div className="card movie-card" key={movie.imdbID}>
                            {/* Displaying the movie poster */}
                            <img src={movie.Poster} className="card-img-top" alt={`Poster for ${movie.Title}`} />
                            <div className="card-body">
                                {/* Displaying the movie title */}
                                <h5 className="movie-title">{movie.Title}</h5>
                                {/* Display the year when movies were released */}
                                <p className="movie-year">{movie.Year}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    // Message when no movies are found
                    <p>No movies found.</p>
                )}
            </div>
        </div>
    );
};

export default MovieList;
