import React from 'react'
import Foto from '../assets/img/perfil.jpg'

export const About = () => {
    return (
        <div className='grid grid-cols-2 mx-48 my-48 items-center justify-center'>
            <div className='relative'>
                <img className='w-48 h-48 rounded-full' src={Foto} alt="" />
                <div className='absolute shadow-2xl shadow-yellow-900 -top-2 -left-2 border-2 w-52 h-52 rounded-full'>
                </div>
            </div>
            <div>
                <h3 className='text-gray-800 text-5xl font-bold'>
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
