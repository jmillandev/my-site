import React from "react";
import illustration from '../imgs/undraw_dev_productivity_umsq.svg';
import Form from './contact.form'

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">                    
                <div className='flex-1'>
                    <h1 className="text-6xl text-purple-700 font-bold " >¡Hola! Mi nombre es Jesús</h1>
                    <p className="text-xl font-light">Creo aplicaciones web en el backend y me apasiona la educación</p>

                </div>
                <img src={illustration} alt="Yisus codeando"  style={{height:"300px"}} />
            </div>
            <div>
                <Form />
            </div>
        </div>
    </header>
)