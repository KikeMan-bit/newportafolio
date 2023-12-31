import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messages, setMessages] = useState("");
    const [captchaValido, cambiarCaptchaValido] = useState(null);
    const [message, getMessage] = useState("");

    const captcha = useRef(null);

    const onChange = () => {
        if (captcha.current.getValue()) {
            console.log('El usuario no es un robot');
            cambiarCaptchaValido(true);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (captcha.current.getValue() && name && email && messages) {
            console.log('Todos los campos están llenos, enviando el formulario');
            // Coloca aquí el código para enviar el formulario
            emailjs.sendForm('service_w4988fd', 'template_enjtbib', form.current, 'dUmxzHvKPR4l0Ih8T')
                .then((result) => {
                    console.log(result.text);
                    getMessage(result);
                    form.current.reset();
                }, (error) => {
                    console.log(error.text);
                });
            cambiarCaptchaValido(true);
        } else {
            console.log('Por favor, complete todos los campos y acepte el captcha');
            // Puedes mostrar un mensaje de error al usuario aquí
        }
    };

    return (
        <div id='contacts' className="grid mt-0 sm:mt-32 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white text-gray-800">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Hablemos!</h2>
                    <div className="text-gray-600">Estoy encantado de tener una conversación contigo.</div>
                </div>
                <img src="https://static.vecteezy.com/system/resources/previews/011/153/360/original/3d-web-developer-working-on-project-illustration-png.png" alt="" className="p-6" />
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                    <label className="text-sm">Nombre Completo</label>
                    <input id="name" type="text" placeholder="" name="user_name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded-lg bg-[#fffcf2] border-2 border-gray-300" />
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <input id="email" type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-lg bg-[#fffcf2] border-2 border-gray-300" />
                </div>
                <div>
                    <label className="text-sm">Mensaje</label>
                    <textarea id="message" rows="3" name="message" value={messages} onChange={(e) => setMessages(e.target.value)} className="w-full p-3 rounded-lg bg-[#fffcf2] border-2 border-gray-300"></textarea>
                </div>
                <div className='flex flex-col justify-center items-center' >
                    <ReCAPTCHA
                        sitekey="6LffuKwoAAAAABkyzNzgbbGljceLax0IJZ-wFpC1"
                        onChange={onChange}
                        ref={captcha}
                    />
                    {captchaValido === false &&
                        <span className='text-red-500 mt-2 font-semibold' >
                            Por favor, acepta el captcha
                        </span>
                    }
                </div>
                {message && (
                    <div className='flex items-center justify-center' >
                        <span className='text-green-500 font-semibold' >
                            Se envió el formulario
                        </span>
                    </div>
                )}
                <input className="cursor-pointer w-full p-3 text-sm font-bold tracking uppercase rounded bg-[#43291f] hover:bg-[#5e483f] text-gray-50" type="submit" value="Enviar" />
            </form>
        </div>
    )
}
