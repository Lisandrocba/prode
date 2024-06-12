

const NuevaCuenta = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url('./HD-wallpaper-argentina-copa-america-champions-2021.webp')]  lg:bg-contain">
    <div className="bg-sky-200 p-10 rounded-xl shadow-lg">
        <p className="text-xl underline">Cuenta Nueva</p>
        <form className="flex flex-col justify-center items-start p-10">
            <label>Nombre de usuario:</label>
            <input className="mb-2 rounded-sm" type="text"/>
            <label>Nombre:</label>
            <input className="mb-2 rounded-sm" type="text"/>
            <label>Apellido:</label>
            <input className="mb-2 rounded-sm" type="text"/>
            <label>Email:</label>
            <input className="mb-5 rounded-sm" type="text"/>
            <label>Password:</label>
            <input className=" mb-2 rounded-sm" type="password"/>
            <input className="m-auto mt-3 cursor-pointer bg-slate-800 text-slate-100 px-3 py-1 rounded-md" type="submit" value="Crar cuenta"/>
        </form>
    </div>
    </div>
  )
}

export default NuevaCuenta
