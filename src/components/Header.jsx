import React from 'react'
import { Fragment, useState } from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/svg/logocc.svg'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// export const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white bg-opacity-80 backdrop-blur-lg border-b z-40 o sticky top-0 ">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    {/* <a href="#" className="-m-1.5 p-1.5">
                        <span className='font-bold text-lg text-gray-800' >CarlosCruz</span>
                    </a> */}
                    <img className='h-10' src={Logo} alt="" />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500} className="cursor-pointer text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500 ">
                        Inicio
                    </Link>

                    <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-180}
                        duration={500} className="cursor-pointer text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500 ">
                        Acerca
                    </Link>

                    <Link to="skill"
                        spy={true}
                        smooth={true}
                        offset={-80} className="cursor-pointer text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500 ">
                        Habilidades
                    </Link>
                    <Link to="project"
                        spy={true}
                        smooth={true}
                        offset={-50} className="cursor-pointer text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500 ">
                        Proyecto
                    </Link>
                    <Link to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-20} className="cursor-pointer text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500 ">
                        Contacto
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className='flex items-center justify-center space-x-4 text-yellow-950'>
                        <span href="#" className="text-sm font-bold leading-6 text-gray-900">
                            Mis Redes:
                        </span>
                        <a className='text-lg' target='__blank' href="https://www.instagram.com/kikem4n/">
                            <FaInstagram />
                        </a>
                        {/* <a target='__blank' href="https://github.com/KikeMan-bit">
                            <FaGithub />
                        </a> */}
                        <a className='text-lg' target='__blank' href="https://www.facebook.com/kik3man/">
                            <FaFacebookF />
                        </a>
                        <a className='text-lg' target='__blank' href="https://www.linkedin.com/in/carlos-enrique-cruz-mendez-289654283">
                            < FaLinkedin />
                        </a>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className=" space-y-2 py-6 ">

                                <Link onClick={() => setMobileMenuOpen(false)} to="hero"
                                    spy={true}
                                    smooth={true}
                                    offset={-20} className="flex justify-center items-center  w-full -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
                                    Inicio
                                </Link>
                                <Link onClick={() => setMobileMenuOpen(false)} to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-20} className="flex justify-center items-center  w-full -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
                                    Acerca
                                </Link>
                                <Link onClick={() => setMobileMenuOpen(false)} to="skill"
                                    spy={true}
                                    smooth={true}
                                    offset={-20} className="flex justify-center items-center  w-full -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
                                    Habilidades
                                </Link>

                                <Link onClick={() => setMobileMenuOpen(false)} to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-20} className="flex justify-center items-center  w-full -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
                                    Proyecto
                                </Link>

                                <Link onClick={() => setMobileMenuOpen(false)} to="contacts"
                                    spy={true}
                                    smooth={true}
                                    offset={-20} className="flex justify-center items-center  w-full -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
                                    Contacto
                                </Link>
                            </div>

                        </div>
                        <div className='flex items-center mt-48 justify-center space-x-4 text-yellow-950'>
                            <span href="#" className="text-lg  font-bold leading-6 text-gray-900">
                                Mis Redes:
                            </span>
                            <a className='text-4xl' target='__blank' href="https://www.instagram.com/kikem4n/">
                                <FaInstagram />
                            </a>
                            {/* <a target='__blank' href="https://github.com/KikeMan-bit">
                            <FaGithub />
                        </a> */}
                            <a className='text-4xl' target='__blank' href="https://www.facebook.com/kik3man/">
                                <FaFacebookF />
                            </a>
                            <a className='text-4xl' target='__blank' href="https://www.linkedin.com/in/carlos-enrique-cruz-mendez-289654283">
                                < FaLinkedin />
                            </a>
                        </div>
                    </div>

                </Dialog.Panel>
            </Dialog>
        </header>
    )
}