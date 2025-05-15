import React from 'react';
import { Link } from 'react-router-dom';
import '../components/style/NotFound.css'; 

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Page non trouvée</p>
     
      <Link to="/"className="not-found-link">Retour à l'accueil</Link>
                    
                

    </div>
  );
}

export default NotFound;
