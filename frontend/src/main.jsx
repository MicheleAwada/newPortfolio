import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider
  } from "react-router-dom";

  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path='/' index element={<App />} />
    )
  );



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
