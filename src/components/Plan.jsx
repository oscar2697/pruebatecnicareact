import { useState } from "react"
import redes from '../assets/redes.png'

export const Plan = () => {
    const [gigas, setGigas] = useState('23')
    const [precio, setPrecio] = useState('20.6')

    return (
        <div className="max-w-sm p-8 bg-white border border-white-200 rounded-lg shadow  dark:border-white-800 text-center">
            <h2 className='text-2xl text-center'>
                Plan Movistar Bronze
            </h2>

            <h1 className="text-2xl text-center font-bold"> {gigas} GB </h1>

            <div className='container mx-auto mt-2 flex justify-center max-w-sm p-5 bg-gray-200 border border-gray-230 rounded-lg shadow  dark:border-gray-200 text-center'>
                <h1>12 GB + 6 GB + 5 GB{''} 
                    <span className="flex justify-center">
                        <p>Navegación</p>
                        <img src={redes} className="w-10" />
                        <p> x 6 meses</p>
                    </span>
                </h1>

                
            </div>

            <p className="container mx-auto mt-3 justify-center p-1 bg-blue-300  font-bold text-center text-white" >
                Redes Sociales libres
            </p>

            <h1 className="mt-3">
                $12.36 {''}
                <span className=' font-bold'>/mes</span>
            </h1>

            <p className="mt-1">Precio Incluye IVA</p>

            <p className="mt-3 container mx-auto justify-center p-1 bg-green-400 rounded-full text-center font-bold text-green-700">
                Recibe los beneficios del Plan {''}
                <span>Superior x 6 meses</span>
            </p>

            <p className="mt-3 container mx-auto justify-center p-1 bg-pink-200 rounded-full text-center font-bold text-pink-700">
                Incluye 40% Dto. por 3 meses
            </p>

            <p className="mt-3">Precio al finalizar la promoción ${precio}/mes</p>

            <button type="button" className='py-2 px-10 bg-blue-400  text-white font-bold uppercase rounded-full mt-3'>
                Lo quiero!
            </button>

            <div className=" mt-3 text-blue-300">Mas beneficios</div>
        </div>
    )
}
