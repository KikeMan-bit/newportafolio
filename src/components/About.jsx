import React from 'react'
import Foto from '../assets/img/foto.png'

export const About = () => {
    return (
        <div id='about' className='grid grid-cols-1 lg:grid-cols-2 lg:mx-48 lg:my-48 mx-10 mt-10 place-content-center place-items-center' >
            <div className='relative'>
                <img className='w-48 h-48 rounded-full' src={Foto} alt="" />
                <div className='absolute shadow-2xl shadow-yellow-700 -top-2 -left-2 border-2 w-52 h-52 rounded-full'>
                </div>
                 {/* <img className='w-96 h-96 rounded-full' src={Foto} alt="" />
                <div className='absolute shadow-2xl shadow-yellow-900 top-12 right-20 border-2 w-60 h-64'>
                </div> */}
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-800 text-5xl font-bold mt-8'>
                    Acerca de Mi
                </h3>
                <p className='text-gray-500 text-lg mt-6'>
                    Hola soy un ingeniero informático con experiencia en
                    el desarrollo web. he trabajado con diferentes
                    frameworks y librerías para acelerar el proceso de
                    desarrollo y mejorar la funcionalidad de las
                    aplicaciones. Me gusta seguir aprendiendo sobre
                    nuevas tecnología y mantenerme actualizado en el
                    area.
                </p>

            </div>

        </div>
    )
}
