

export const Plan = () => {
    return (
        <div className="md:w-1/2 lg:w2/5 mx-5">
            <h2 className='font-black text-2xl text-center'>
                Plan Movistar Bronze
            </h2>

            <h1 className=" text-center"> 23 GB </h1>

            <p>
                Redes Sociales libres
            </p>

            <h1>
                $12.36 {''}
                <span className='text-indigo-600 font-bold'>/mes</span>
            </h1>

            <p>Precio Incluye IVA</p>

            <p>
                Recibe los beneficios del Plan {''}
                <span>Superior x 6 meses</span>
            </p>

            <p>Incluye 40% Dto. por 3 meses</p>

            <p>Precio al finalizar la promoción $20.6/mes</p>

            <button type="button" className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
                Lo quiero!
            </button>
        </div>
    )
}
