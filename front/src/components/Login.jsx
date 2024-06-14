import axios from "axios"
import { useContext, useState } from "react"
import { URL_BACK } from "../utils/urls"
import { MyContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const {setUserName, setPuntos} = useContext(MyContext)
    const navigate = useNavigate()
    const [datos, setData] = useState({
        nombreUsuario: '',
        password: ''
    })

    const handleChange =(e)=>{
        setData({...datos , [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const result = await axios.post(`${URL_BACK}user/login`, { userName: datos.nombreUsuario, password: datos.password })
            if(!result) return
            console.log(result)
            setUserName(result.data.userName)
            setPuntos(result.data.puntos)
            localStorage.setItem('token', result.data.token)
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url('./HD-wallpaper-argentina-copa-america-champions-2021.webp')]  lg:bg-contain">
        <div className="bg-sky-200 p-10 rounded-xl shadow-lg">
            <p className="text-xl underline">Login</p>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-start p-10">
                <label>Nombre de usuario:</label>
                <input name="nombreUsuario" onChange={handleChange} className="mb-5 rounded-sm" value={datos.nombreUsuario} type="text"/>
                <label>Password:</label>
                <input name="password" onChange={handleChange} className=" mb-5 rounded-sm" value={datos.password} type="password" />
                <input className="m-auto mt-3 cursor-pointer bg-slate-800 text-slate-100 px-3 py-1 rounded-md" type="submit" value="Iniciar sesion"/>
            </form>
        </div>
    </div>
  )
}

export default Login
