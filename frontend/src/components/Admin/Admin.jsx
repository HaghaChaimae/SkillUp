import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Admin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@skillup.com' && password === 'admin123') {
      localStorage.setItem('role', 'admin');
      navigate('/Admin/AdminDashboard');
    } else if (email === 'formateur@skillup.com' && password === 'formateur123') {
      localStorage.setItem('role', 'formateur');
      navigate('/Formateur/FormateurDashboard');
    } else {
      alert('Identifiants incorrects');
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg border-0 p-4" style={{ width: '100%', maxWidth: '420px' }}>
        <div className="text-center mb-4">
          <i className="bi bi-person-lock" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
          <h3 className="mt-2">Login</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope"></i></span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="admin@skillup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock"></i></span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            <i className="bi bi-box-arrow-in-right me-2"></i>Se connecter
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Retour à l'accueil ? <a href="/" className="text-decoration-none">Cliquez ici</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Admin;
