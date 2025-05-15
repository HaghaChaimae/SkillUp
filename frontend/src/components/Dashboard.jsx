import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../components/style/Dashboard.css';
const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Tableau de bord</h2>
      <p>Bienvenue, Thomas ! Continuez votre apprentissage.</p>

      {/* Statistiques */}
      <div className="row text-center mb-4">
        <StatCard title="Cours suivis" value="2" icon="bi-book" />
        <StatCard title="Heures d'apprentissage" value="12.5" icon="bi-clock" />
        <StatCard title="Quiz complétés" value="7" icon="bi-check-circle" />
        <StatCard title="Accomplissements" value="3" icon="bi-stars" />
      </div>
<br />
      {/* Cours en cours */}
      <div>
        <h4>Mes cours en cours</h4>
        <div className="row">
          <CourseCard
            title="Introduction au Développement Web"
            progress={65}
            lessons="8 sur 12 leçons complétées"
            lastAccess="Hier à 14:30"
            image="dev.jpg"
          />
          <CourseCard
            title="Marketing Digital pour Débutants"
            progress={30}
            lessons="3 sur 10 leçons complétées"
            lastAccess="Il y a 3 jours"
            image="marketing.jpg"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="col-md-3 mb-3">
    <div className="border rounded p-3">
      <i className={`bi ${icon} fs-3`}></i>
      <h5 className="mt-2">{value}</h5>
      <p className="mb-0">{title}</p>
    </div>
  </div>
);

const CourseCard = ({ title, progress, lessons, lastAccess, image }) => (
  <div className="col-md-6 mb-4">
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5>{title}</h5>
        <p><strong>Progression</strong> {progress}%</p>
        <div className="progress mb-2">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{lessons}</p>
        <p className="text-muted">{lastAccess}</p>
        <button className="btn btn-primary">Continuer</button>
      </div>
    </div>
  </div>
);

export default Dashboard;
