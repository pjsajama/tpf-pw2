import React from 'react';
import localMovies from './localMovies';
//import './Movies.css';

function Movies() {
  return (
    <div className="games-container">
      <div className="page-header">
        <h2>🐉 Películas de Dragon Ball</h2>
        <p>Disfruta de las mejores películas y especiales del universo Z y Super</p>
      </div>
      
      <div className="games-grid">
        {localMovies.map(movie => (
          <div 
            key={movie.id} 
            className="detailed-game-card"
            onClick={() => window.open(movie.downloadLink, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <div className="game-badge">{movie.category}</div>
            
            <div className="game-image">
              <img 
                src={movie.image} 
                alt={movie.title} 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x296/ff6b6b/ffffff?text=' + encodeURIComponent(movie.title);
                }} 
              />
              <div className="game-overlay">
                <span className="platform">{movie.platform}</span>
                <span className="click-hint">👆 Click para ver</span>
              </div>
            </div>
            
            <div className="game-info">
              <h3>{movie.title}</h3>
              
              <div className="game-rating">
                {'⭐'.repeat(Math.floor(movie.rating))}
                <span className="rating-text">{movie.rating}/5</span>
              </div>
              
              <p className="description">{movie.description}</p>
              
              <div className="game-stats">
                <span className="stat">⏱️ {movie.size}</span>
                <span className="stat">👁️ {movie.downloads}</span>
              </div>
              
              <a 
                href={movie.downloadLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-btn"
                onClick={(e) => e.stopPropagation()}
              >
                ▶️ Ver Ahora
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;