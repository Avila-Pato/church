"use client"
import React, { useState } from 'react'

export const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')

    return (
        <div className='container'>
            <form action="">
                <h1>Contactanos</h1>

                <input
                    type="text"
                    id='Nombre'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                    aria-placeholder='Escribe tu nombre..'
                />


                <input
                    type="text"
                    id='Correo'
                    value={correo} onChange={(e) => setCorreo(e.target.value)}
                    placeholder="Correo"
                    aria-placeholder='Escribe tu correo..' />

                <textarea 
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder='Escribe tu mensaje..'>
                </textarea>

                <button className='button__enviar' type="submit" id='button__enviar'>Enviar</button>
            </form>
        </div>
    )
}
