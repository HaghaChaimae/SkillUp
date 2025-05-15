import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../components/image/programming-background-collage.jpg';
import image1 from '../components/image/representations-user-experience-interface-design.jpg';

const courses = [
  {
    id: 1,
    title: 'Développement Web',
    description: 'Apprenez HTML, CSS, JavaScript et les frameworks modernes.',
   image,
  },
  {
    id: 2,
    title: 'Business & Entrepreneuriat',
    description: 'Développez votre esprit entrepreneurial et vos compétences en gestion.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Design UI/UX',
    description: 'Créez des interfaces utilisateurs intuitives et esthétiques.',
    image1,
  },
  {
    id: 4,
    title: 'Marketing Digital',
    description: 'Maîtrisez le SEO, les réseaux sociaux et les stratégies numériques.',
    image: 'https://via.placeholder.com/300x200',
  }
];

const CoursesPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Découvrez nos cours</h2>
      <div className="row">
        {courses.map(course => (
          <div className="col-md-6 col-lg-4 mb-4" key={course.id}>
            <div className="card h-100 shadow-sm">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text flex-grow-1">{course.description}</p>
                <a href="#" className="btn btn-primary mt-auto">Voir plus</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
