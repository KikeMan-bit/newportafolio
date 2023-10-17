import React from 'react'

export const Contact = () => {
    return (
        <div className="grid mt-32 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white text-gray-800">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leadi lg:text-5xl">Hablemos!</h2>
                    <div className="text-gray-600">Estoy encantado de tener un conversacion.</div>
                </div>
                <img src="" alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form novalidate="" className="space-y-6">
                <div>
                    <label for="name" className="text-sm">Nombre Completo</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded-lg bg-[#fffcf2] border-2 border-gray-300 " />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded-lg bg-[#fffcf2] border-2 border-gray-300 " />
                </div>
                <div>
                    <label for="message" className="text-sm">Mensaje</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded-lg bg-[#fffcf2] border-2 border-gray-300 "></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-[#43291f] text-gray-50">Enviar Mensaje</button>
            </form>
        </div>
    )
}
