import React from 'react'
import { FormMail } from './FormMail'


export const Contact = ({ nocturnMode }) => {
    return (
        <section className={ nocturnMode ? 'box-contact': 'box-contact bc-nocturn' } id='contact'>

            <article className='_contact '>

                <h3 className='mt-5 tit'>Contacto</h3>
                <hr />

                <div className='row col-12 mt-4 -container'>

                    <div className='col-12 col-lg-8 _contact-info-container' data-aos="fade-right">


                        <h2>Trabajemos Juntos!</h2>
                        <div className='_contact-text-container'>
                            <ul>
                                <li>
                                Queres tu propia web personal? 
                                </li>
                                <li>Tenes un emprendimiento y queres mostrarte al mundo?</li>
                                <li>Tenes un proyecto armado y te interesa mi perfil para unirme a tu equipo de trabajo?</li>
                            </ul>
                                <p>Ponete en contacto conmigo a traves de las redes que te dejo a continuacion!</p>
                        </div>


                        <div className='row _contact-redes-container'>

                            <div className='wsp col-3 col-lg-2'>
                                <a 
                                    className="red-" 
                                    href="https://wa.me/5491161378174"
                                    target="_blank"
                                    rel="noreferrer"
                                    ><i className="fab fa-whatsapp"></i>
                                </a>

                            </div>

                            <div className='Email col-3 col-lg-2'>
                                 <a className="red-" 
                                    href="mailto:zapata.ed1989@gmail.com?subject=PorfolioContacto" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    ><i className="fas fa-envelope"></i>
                                </a>

                            </div>

                            <div className='linkedin col-3 col-lg-2'>
                                <a 
                                    className="red-" 
                                    href="https://www.linkedin.com/in/ezequiel-zapata-5abb451b9/" 
                                    target="_blank"
                                    rel="noreferrer"
                                    ><i className="fab fa-linkedin-in"></i>

                                </a>
                            </div>

                            <div className='gitHub col-3 col-lg-2'>
                                <a 
                                    className="red-" 
                                    href="https://github.com/Ezequielz" 
                                    target="_blank"
                                    rel="noreferrer"
                                    ><i className="fab fa-github"></i>

                                </a>
                            </div>

                        </div>

   

                    </div>


                    <FormMail />

                </div>

                       

            </article>
        </section>
    )
}
