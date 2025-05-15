import { createBrowserRouter } from 'react-router-dom';


// Pages publiques
import MainLayout from '../components/MainLayout';
import HomePage from '../components/HomePage';
import CoursesPage from '../components/CoursesPage';
import Login from '../components/Login';
import Register from '../components/Register';
import NotFound from '../components/NotFound';
import Dashboard from '../components/Dashboard';
import Logout from '../components/Logout';


import MainLayoute from '../components/MainLayoute';
import Admin from '../components/Admin/Admin';
import AdminDashboard from '../components/Admin/AdminDashboard';
import Settings from '../components/Admin/Settings';
import ListUsers from '../components/Admin/ListUsers';
import ListCours from '../components/Admin/ListCours';

import FormateurDashboard from '../components/Formateur/FormateurDashboard';
import Etudiants from '../components/Formateur/Etudiants';
import ListeCours from '../components/Formateur/ListCours';

export const router = createBrowserRouter([
  // Routes publiques
  { path: '/', element: <HomePage /> },
  {
    element: <MainLayout />,
    children: [
      { path: '/cours', element: <CoursesPage /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/Dashboard', element: <Dashboard /> },
      { path: '/logout', element: <Logout /> },
    ]
  },
 



 { path: '/Admin', element: <Admin /> },
{
  element: <MainLayoute />,
  children: [
    { path: '/Admin/Settings', element: <Settings /> },
    { path: '/Admin/AdminDashboard', element: <AdminDashboard /> },
    { path: '/Admin/ListUsers', element: <ListUsers /> },
    { path: '/Admin/ListCours', element: <ListCours /> }, 
    { path: '/Formateur/FormateurDashboard', element: <FormateurDashboard /> },
{ path: '/Formateur/Etudiants', element: <Etudiants /> },
    { path: '/Formateur/Cours', element: <ListCours /> }, 

  ]
},




  // {
 

  //   element: <PrivateRoute allowedRoles={['admin']} />,
  //   children: [
  //     {
  //       element: <AdminNavbar />,
  //       children: [
  //         { path: '/Admin', element: <Admin /> },
         
  //       ]
  //     }
  //   ]
  // },

  // Routes Employé protégées
  /*{
    element: <PrivateRoute allowedRoles={['employee']} />,
    children: [
      {
        element: <Sidebar />,
        children: [
          { path: '/employes/profile', element: <Profile /> },
          { path: '/employes/absences', element: <EmployeeAbsences /> },
          { path: '/employes/ajouter-absence', element: <AddAbsence /> },
          { path: '/employes/mot-de-passe', element: <ChangePassword /> },
          { path: '/employes/modifier-profil', element: <EditProfile /> },
          { path: '/employes/projets', element: <Project /> },
        ]
      }
    ]
  },*/

  // Page 404
  { path: '*', element: <NotFound /> },
]);
