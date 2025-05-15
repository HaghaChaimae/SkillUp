import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Settings.css';

const Settings = () => {
  const [username, setUsername] = useState('Admin');
  const [email, setEmail] = useState('admin@skillup.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [history, setHistory] = useState([
    { date: '2025-05-09', ip: '192.168.1.1' },
    { date: '2025-05-08', ip: '192.168.1.2' },
  ]);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
    } else {
      // Effectuer l'appel API pour mettre à jour les informations de l'utilisateur
      console.log('Informations mises à jour');
      alert('Les informations ont été mises à jour avec succès.');
    }
  };

  // Fonction pour basculer entre le thème clair et sombre
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Applique la classe sur le body pour le thème
  };

  return (
    <div className="container Settings mt-5">
      <h2>Paramètres du Profil</h2>

      <div className="card p-4 shadow-sm">
        <h4 className="mb-4">Modifier les Informations</h4>
        <form onSubmit={handleSubmit}>
          {/* Nom d'utilisateur */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Mot de passe */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Nouveau mot de passe</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirmer mot de passe */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Sauvegarder les modifications</button>
        </form>
      </div>

      {/* Choix du thème */}
      <div className="card p-4 shadow-sm mt-4">
        <h4 className="mb-4">Mode de Thème</h4>
        <button className="btn btn-secondary" onClick={toggleTheme}>
          Passer en mode {theme === 'light' ? 'sombre' : 'clair'}
        </button>
      </div>

      {/* Historique des connexions */}
      {/* <div className="card p-4 shadow-sm mt-4">
        <h4 className="mb-4">Historique des Connexions</h4>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              <span>{entry.date} - {entry.ip}</span>
            </li>
          ))}
        </ul>
      </div> */}

   
    </div>
  );
};

export default Settings;
