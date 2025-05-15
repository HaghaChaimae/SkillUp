import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const ListUsers = () => {
  const [search, setSearch] = useState('');

  const utilisateurs = [
    { id: 1, nom: 'Ahmed', prenom: 'Boukhris', email: 'ahmed@example.com', role: 'formateur' },
    { id: 2, nom: 'Leila', prenom: 'Benali', email: 'leila@example.com', role: 'admin' },
    { id: 3, nom: 'Youssef', prenom: 'Karim', email: 'youssef@example.com', role: 'formateur' },
    { id: 4, nom: 'Samira', prenom: 'Naji', email: 'samira@example.com', role: 'admin' },
    { id: 5, nom: 'Rachid', prenom: 'Mokhtar', email: 'rachid@example.com', role: 'formateur' },
  ];

  const handleView = (user) => {
    alert(`Détails de ${user.nom} ${user.prenom}`);
  };

  const handleEdit = (user) => {
    alert(`Modifier ${user.nom} ${user.prenom}`);
  };

  const handleDelete = (user) => {
    if (window.confirm(`Supprimer ${user.nom} ${user.prenom} ?`)) {
      alert(`Utilisateur ${user.nom} supprimé`);
      // Ici, tu pourras ajouter le code pour supprimer réellement depuis le backend
    }
  };

  const filtered = utilisateurs.filter(u =>
    `${u.nom} ${u.prenom} ${u.email} ${u.role}`.toLowerCase().includes(search.toLowerCase())
  );

  const formateurs = filtered.filter(u => u.role === 'formateur');
  const admins = filtered.filter(u => u.role === 'admin');

  const renderTable = (title, users, color) => (
    <>
   
      <h4 className="mt-4">{title}</h4>
      <table className="table table-bordered table-hover">
        <thead className={color}>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nom}</td>
                <td>{u.prenom}</td>
                <td>{u.email}</td>
                <td>
                  <button className="btn btn-info btn-action me-1" onClick={() => handleView(u)}>
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="btn btn-primary btn-action me-1" onClick={() => handleEdit(u)}>
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-danger btn-action me-1" onClick={() => handleDelete(u)}>
                    <i className="bi bi-trash"></i>
                  </button>

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">Aucun utilisateur trouvé</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Gestion des Utilisateurs</h2>
 <Link to="/admin/register" className="btn btn-primary">
       <i className="fa-solid fa-plus"></i> Ajouter un utilisateur
     </Link>
     <br /><br />
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Rechercher par nom, prénom, email ou rôle..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {renderTable("👨‍💼 Administrateurs", admins, "table-dark")}
      {renderTable("📚 Formateurs", formateurs, "table-secondary")}
    </div>
  );
};

export default ListUsers;
