import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import NuevaCuenta from './components/NuevaCuenta'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/nuevacuenta' element={<NuevaCuenta />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
