import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // Dragon Ball API - Solicitamos los personajes (limitando a 12)
        const response = await axios.get('https://dragonball-api.com/api/characters?limit=12');
        
        // La API devuelve un objeto paginado, los datos están en '.items'
        const dataList = response.data.items || response.data;

        // Transformamos los datos de Dragon Ball manteniendo la estructura que usabas
        const charactersData = dataList.map((character) => ({
          id: character.id,
          name: character.name,
          image: character.image,
          race: character.race || 'Desconocida',
          gender: character.gender || 'No especificado'
        }));
        
        setCharacters(charactersData);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los personajes de Dragon Ball. Por favor, intenta de nuevo.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <div className="loading">Cargando personajes...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-container">
      <div className="hero-section">
        <h2> Personajes de Dragon Ball</h2>
        <p>Descubre los guerreros más poderosos del universo</p>
      </div>
      
      <div className="games-grid">
        {characters.map(character => (
          <div key={character.id} className="game-card">
            <div className="game-image">
              <img src={character.image} alt={character.name} />
            </div>
            <div className="game-info">
              <h3>{character.name}</h3>
              <div className="game-details">
                <span className="rating">🧬 {character.race}</span>
                <span className="year">👤 {character.gender}</span>
              </div>
              <button className="download-btn">Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;