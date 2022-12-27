import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/NavBar'
import { Stack } from '@mui/material'
import Divider from '@mui/material/Divider'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {

  return (

    <div className="App">
      <Portfolio />
    </div>
  )
}

export default App
