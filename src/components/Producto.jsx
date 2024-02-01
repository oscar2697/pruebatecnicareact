import { useState } from 'react'
import iphone from '../assets/iphone12.jpg'

export const Producto = () => {
    const [cuotas, setCuotas] = useState('392.00')
    const [precioFinal, setPrecioFinal] = useState('1873.00')
    return (
        <div className="max-w-sm p-8 bg-white border border-white-200 rounded-lg shadow  dark:border-white-800 text-center">
            <h2 className="mt-3 container mx-auto justify-center p-1 bg-pink-200 rounded-full text-center font-bold text-pink-700">
                25% de descuento
            </h2>

            <img src={iphone} />

            <h2 className="font-bold mt-3">
                iPhone 12 Pro Max Negro
            </h2>

            <p className='mt-2'>
                Hasta 12 cuotas de: {''} 
            </p>

            <p className='font-bold mt-2' >${cuotas}</p >

            <p className='mt-2'>Precio Final: ${precioFinal}0</p>

        </div>
    )
}
