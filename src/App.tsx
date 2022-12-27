import './App.css'
import Home from './pages/home/Home'
import Counter from './components/NavBar'
import { Stack } from '@mui/material'
import Divider from '@mui/material/Divider'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {

  return (

    <div className="App">
      <Home />
      <Portfolio />
    </div>
  )
}

export default App
