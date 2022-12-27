import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './pages/home/Home'
import Portfolio from './pages/Portfolio/Portfolio'

const router = createBrowserRouter([
  {
    'path': '/projects',
    'element': <Home />
  },
  {
    'path': '/projects',
    'element': <Portfolio />
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />

  </React.StrictMode>,
)
