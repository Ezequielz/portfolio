import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

export const FormMail = () => {

    
    const initialState = {
        name:"",
        user_email:"",
        telefono:"",
        mensaje:""
    }
    const [formValues, setFormValue] = useState(initialState)
    
    const {name, user_email, mensaje} = formValues
    
    const handleChange = (e) => {
        e.preventDefault();
        setFormValue(e.target.value)
    }

        

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm( 
            'service_md2xrqq',
            'template_5ms6g1w',
             e.target ,
            'user_OhoXMtogqSPJnczw2lipu' 
        ).then( res =>{
            Swal.fire(
                 'Email enviado',
                 'Le responderé a la brevedad',
                 'success'

            )
            
            setFormValue( initialState )
        }).catch(err => Swal.fire(
            'Error',
            'Intente enviar el email mas tarde',
            'error'

       ))
    }

    return (
        <div className='col-12 col-lg-4 box-form-mail'>

            <h5>Pongamonos en contacto!</h5>

            <form action="" onSubmit={ sendEmail } >

                <div className='col-12 nombre '>
                    <input 
                        type="text" 
                        placeholder='nombre'
                        name="name" 
                        onChange={ handleChange }
                        autoComplete='off'
                        value={ name }
                        required
                    />

                </div>
                {/* 
                <div className='col-6'>

                    <input type="tel" name="telefono" id="" 
                        onChange={ handleChange }
                        placeholder='telefono'
                        autoComplete='off'
                        value={ telefono  }
                    />

                </div> */}

                <div className='col-12 mt-2 email'>
                    <input 
                        type="email" 
                        placeholder='email'
                        name="email" 
                        onChange={ handleChange }
                        autoComplete='off'
                        value={ user_email  }
                        required
                    />

                </div>

                <div className='mt-2 mensaje'>

                    <textarea 
                        className='col-12 '
                        type="text"
                        name="message"
                        onChange={ handleChange }
                        placeholder='deje su mensaje'
                        autoComplete='off'
                        value={  mensaje }
                        rows="5" 
                        required


                    />

                </div>


                <div className='enviar col-12 mt-3'>
                     <input type="submit" value="Enviar" />

                </div>



            </form>
        </div>
    )
}
