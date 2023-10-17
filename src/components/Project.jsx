import React from 'react'
import { CardProject } from './Project/CardProject'
import image1 from '../assets/img/project/img1.png'
import image2 from '../assets/img/project/img2.png'
import image3 from '../assets/img/project/img3.png'
import image5 from '../assets/img/project/img5.png'




export const Project = () => {
    return (
        <div className='relative  p-4 ' >
            <div className='absolute w-full h-full -z-10 bg-[#eae0d5] blur-3xl'>
            </div>
            <h3 className='flex items-center justify-center text-5xl text-gray-900  font-bold my-8'>
                Proyectos
            </h3>
            <div className='grid grid-cols-3 gap-8' >
                <CardProject image={image1} title='Landing Page' react={true} tailwind={true} description='ChacoMistol' />

                <CardProject image={image2} title='Sistema Web' web='https://laboratoriocamiri.online/' laravel={true} tailwind={true} description='LaboratorioCamiri' />

                <CardProject image={image3} title='Sitio Web' web='https://storebinary.online/' laravel={true} tailwind={true} description='StoreBinary' />

                <CardProject title='Sitio Web' booststrap={true} web={true} laravel={true} tailwind={true} description='Blog' />

                <CardProject image={image5} title='Sistema Web' web={true} laravel={true} tailwind={true}  booststrap={true} description='Halleybox' />

            </div>
        </div>
    )
}
