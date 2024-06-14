import { Link } from "react-router-dom"


const AgregarPartido = () => {
  return (
    <div>
      <Link to='/home' className='text-xl hover:underline hover:text-sky-400 transition-all absolute bottom-0 bg-sky-200 px-5 py-2 right-0 m-2 rounded-lg'>Home</Link>
      <p>Agregar Partido</p>
      <form className="flex flex-col justify-center items-center gap-5 mt-5 bg-slate-800 py-10 w-2/3 m-auto rounded-lg">
        <input className="px-2 py-1 rounded-md focus:outline-none" type="date" />
        <input className="px-2 py-1 rounded-md focus:outline-none" type="text" placeholder="Hora" />
        <input className="px-2 py-1 rounded-md focus:outline-none" type="text" placeholder="Nombre Local" />
        <input className="px-2 py-1 rounded-md focus:outline-none" type="text" placeholder="Nombre Visitante" />
        <input type="submit" className="bg-sky-200 px-5 py-1 rounded-lg mt-5" />
      </form>
    </div>
  )
}

export default AgregarPartido