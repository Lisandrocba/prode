import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import NuevaCuenta from './components/NuevaCuenta'
import AppContext from './context/AppContext'
import AgregarPartido from './components/AgregarPartido'

function App() {

  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/nuevacuenta' element={<NuevaCuenta />}/>
          <Route path='/agregarpartido' element={<AgregarPartido />}/>
          <Route path='/agregarresultado' element={<AgregarPartido />}/>
        </Routes>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
