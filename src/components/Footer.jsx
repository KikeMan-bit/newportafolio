import React from 'react'
import Logo from '../assets/svg/logocc.svg'

export const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-900 mt-8">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto md:p-8 lg:flex-row divide-gray-600">
                <div className="flex lg:flex-1">
                    <img src={Logo} className='h-10' alt="" />
                </div>
                <div>
                © Todos los derecho Reservados
                </div>
            </div>
        </footer>
    )
}
