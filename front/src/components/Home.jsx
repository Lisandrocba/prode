import { useContext, useEffect } from "react"
import { MyContext } from "../context/AppContext"
import axios from "axios"
import { URL_BACK } from "../utils/urls"
import NavBar from "./NavBar"


const Home = () => {
  const {setUsers, users, userName} = useContext(MyContext)



  useEffect(()=>{
      const getUser =async()=> {
        const response = await axios.get(`${URL_BACK}user`, {
          headers: {
            Authorization: `${localStorage.getItem('token')}`
          }
        });
        setUsers(response.data?.users)
      }
      getUser()
  }, [])

  return (
    <div className="bg-[url('./HD-wallpaper-argentina-copa-america-champions-2021.webp')] h-screen">
      <NavBar />
      <div className="flex flex-col justify-center px-2 py-10 bg-sky-200 rounded-xl w-4/5 m-auto mt-5">
        <p className="text-2xl mb-10 underline">Tabla de posiciones</p>
        { 
        users.length > 0 && users.map((item, index)=> {
          return(
            <div className={`flex flex-row justify-between px-3 my-3 ${index === 0 ? 'bg-yellow-400 py-5 text-xl' : index === 1 ? 'bg-gray-400 py-4 text-lg' : index === 2 ? 'bg-orange-200 py-3' : 'bg-slate-300 py-2'} rounded-full text-gray-900`} key={item._id}>
              <div className="flex gap-x-1">
                <p>{index + 1}</p>
                <p className={`${userName === item.userName && 'underline'}`}>{item.userName}</p>
              </div>
              <p>{item.puntos}</p>
            </div>
          )
          })
        } 
      </div>
    </div>
  )
}

export default Home
