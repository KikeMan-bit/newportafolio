import React from 'react'
import { CardProject } from './Project/CardProject'

export const Project = () => {
    return (
        <div>
            <h3 className='flex items-center justify-center text-5xl text-gray-900  font-bold my-6'>
                Proyectos
            </h3>
            <div className='grid grid-cols-3 gap-8' >
                <CardProject title='ChacoMistol' web={true} react={true} tailwind={true} description='LandingPage para una microempresa de miel' />

                <CardProject title='Laboratorio Camiri' web={true} laravel={true} tailwind={true} description='Sistema Web para el control de laboratorios' />

                <CardProject title='StoreBinary' web={true} laravel={true} tailwind={true} description='Pagina web de cosméticos del VideoJuego Fortnite' />

                <CardProject title='Noticias' booststrap={true} description='LandingPage para una microempresa de miel' />

                <CardProject title='Ecommerce' description='LandingPage para una microempresa de miel' />

            </div>
        </div>
    )
}
