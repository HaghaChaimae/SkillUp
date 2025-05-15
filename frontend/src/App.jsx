import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
/*
import React from 'react';
import HomePage from './components/HomePage';

function App() {
  return <HomePage />;
}

export default App;
*/