import React from 'react'
import { Card } from './Skill/Card'

export const Skills = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-8 m-8'>
                <div className='p-4' >
                    <h3 className='text-5xl font-bold text-gray-800'>
                        Mis Habilidades y Experiencias
                    </h3>
                    <div className='flex-col space-y-8  font-normal pt-6 text-lg text-gray-500 '>
                        <p>
                            Soy un apasionado desarrollador con experiencia en la creación de soluciones tecnológicas innovadoras.
                        </p>
                        <p>
                            Mi conjunto de habilidades incluye dominio en varios lenguajes de programación y tecnologías, respaldado por proyectos destacados que demuestran mi capacidad para enfrentar desafíos técnicos y entregar resultados de alta calidad.
                        </p>
                        <p>
                            Mi enfoque en el aprendizaje continuo y la colaboración me ha permitido destacar en el campo del desarrollo de software.
                        </p>
                    </div>
                    {/* <h3 className='text-5xl font-bold text-gray-800 mt-8'>
                        Habilidades Blandas
                    </h3> */}
                    <div className='grid grid-cols-2 gap-4 mt-10' >
                        <div className='flex justify-center items-center border-2 text-gray-700 rounded-md p-4 w-full font-bold bg-transparent backdrop-blur-3xl' >Trabajo en equipo</div>
                        <div className='flex justify-center items-center border-2 text-gray-700 rounded-md p-4 w-full font-bold bg-transparent backdrop-blur-3xl' >Compromiso</div>
                        <div className='flex justify-center items-center border-2 text-gray-700 rounded-md p-4 w-full font-bold bg-transparent backdrop-blur-3xl' >Aprendizaje constante</div>
                        <div className='flex justify-center items-center border-2 text-gray-700 rounded-md p-4 w-full font-bold bg-transparent backdrop-blur-3xl' >Creatividad</div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='flex items-center justify-center font-bold text-md mb-2'>Frontend</h2>


                        <div className='grid grid-cols-5 gap-6 items-center justify-evenly border-2 py-6 rounded-2xl '>
                            <Card title='HTML5' image='https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png' />

                            <Card title='CSS3' image='https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png' />

                            <Card title='Javascript' image='https://camo.githubusercontent.com/e1a54ddebc870cb971c713b20765f1c2ed328efff836eebe3c2bafccbc12bb0a/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3334342f6a6176617363726970742e706e67' />

                            <Card title='React' image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' />

                            <Card title='Alpinejs' image='https://res.cloudinary.com/astrava/image/upload/f_auto/v1589834066/alpinetoolbox/placeholder_k1nruc.png' />


                            <Card title='Tailwindcss' image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' />


                            <Card title='Bootstrap' image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png' />

                        </div>
                    </div>

                    <div>
                        <h2 className='flex items-center justify-center font-bold text-md my-2'>Backend</h2>
                        <div className='grid grid-cols-4 gap-6 items-center justify-evenly border-2 py-6 rounded-2xl '>
                            <Card title='MySQL' image='https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png' />

                            <Card title='PHP' image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png' />

                            <Card title='Laravel' image='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png' />
                        </div>
                    </div>

                    <div>
                    </div>

                    <div>
                        <div>
                            <h2 className='flex items-center justify-center font-bold text-md my-2'>Extra</h2>
                        </div>

                        <div className='grid grid-cols-5 gap-6 items-center justify-evenly border-2 py-6  mb-8 rounded-2xl '>

                            <Card title='Git' image='https://victorroblesweb.es/wp-content/uploads/2018/04/git.png' />

                            <Card title='GitHub' image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/200px-GitHub_Invertocat_Logo.svg.png' />

                            <Card title='Illustrator' image='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png' />

                            <Card title='Adobe XD' image='data:image/png;base64,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' />


                            <Card title='Photoshop' image='data:image/png;base64,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' />

                            <Card title='API REST FULL' image='https://media.licdn.com/dms/image/D4E12AQHUpQpcSsjnUw/article-cover_image-shrink_600_2000/0/1667956348172?e=2147483647&v=beta&t=VBPnkpfgha0y5fuNEdjOmG6vSwXOarA-M5XeSR6d1Wk' />

                            <Card title='Hostinger' image='data:image/png;base64,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' />




                            <Card title='Livewire' image='https://avatars.githubusercontent.com/u/51960834?s=200&v=4' />

                            <Card title='XAMPP' image='https://upload.wikimedia.org/wikipedia/en/thumb/7/78/XAMPP_logo.svg/1200px-XAMPP_logo.svg.png' />

                            <Card title='Figma' image='https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma' />

                            <Card title='Docker' image='https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png' />

                            <Card title='Vite' image='https://vitejs.dev/logo-with-shadow.png' />

                            <Card title='Ofice365' image='data:image/jpeg;base64,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' />


                        </div>
                    </div>


                </div>


            </div>


        </div>
    )
}
