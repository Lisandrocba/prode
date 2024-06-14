import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/AppContext'

const NavBar = () => {
    const {userName} = useContext(MyContext)
  return (
    <nav className='flex flex-row justify-between px-5 py-4 border-b-2 bg-white'>
      <Link to='/home' className='text-xl hover:underline hover:text-sky-400 transition-all'>Inicio</Link>
      <Link to='/prediccion' className='text-xl hover:underline hover:text-sky-400 transition-all'>Prediccion</Link>
      <Link to='/resultados' className='text-xl hover:underline hover:text-sky-400 transition-all'>Resultados</Link>
      {
        userName === 'Licha' &&  <Link to='/agregarresultado' className='text-xl hover:underline hover:text-sky-400 transition-all absolute bottom-0 bg-white px-5 py-2 right-0 m-2 rounded-lg'>Agregar Resultado</Link>
    }
    {
        userName === 'Licha' &&  <Link to='/agregarpartido' className='text-xl hover:underline hover:text-sky-400 transition-all absolute bottom-0 bg-white px-5 py-2 left-0 m-2 rounded-lg'>Agregar Partido</Link>
    }
    </nav>
  )
}

export default NavBar
