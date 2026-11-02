import React from 'react';
import localMovies from './localMovies';
//import GameCard from './GameCard';


function Movies() {
  return (
    <div className="games-container">
      <div className="page-header">
        <h2>🐉 Películas de Dragon Ball</h2>
        <p>Disfruta de las mejores películas del universo Z y Super</p>
      </div>
      
      <div className="games-grid">
        {localMovies.map(movie => (
          <GameCard 
            key={movie.id}
            title={movie.title}
            image={movie.image}
            rating={movie.rating}
            category={movie.category}
            size={movie.size}
            platform={movie.platform}
            description={movie.description}
            downloadLink={movie.downloadLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;