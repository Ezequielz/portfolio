import React from 'react'
import foto from '../../media/fotoPerfil.jpg'
import diploma from '../../media/diploma.jpg'
import diplomaPDF from '../../data/diploma.pdf'
import CV from '../../data/CV-Ezequiel-Zapata.pdf';



export const About = ({ nocturnMode }) => {
    return (
        <section className={ nocturnMode ? 'box-about  ': 'box-about ba-nocturn ' } id='aboutMe'>

            <article >
                <h3 className='mt-5 title'>Sobre mi</h3>
                <hr />
                
                <div className='col-12 col-lg-6 cv-container '>
                    <a
                        href={CV}
                        className="cv"
                        target="_blank"

                        rel="noreferrer"
                        download
                    >
                        Descargar CV <i className="fas fa-file-download"></i>
                    </a> 
                </div>

                <div className=' col-12 col-lg-11 about-container'>

                     

                    <div className='row about-info-container'>


                        
                        <div className='container-info c-one col-11 row'>

                            {/* FOTO CONTAINER */}

                            <div className='col-xs-12 col-sm-4 col-lg-3  foto-container'   data-aos="zoom-out-left">

                                <img src={foto} className='foto' alt="foto Ezequiel Zapata" />
                            </div>
                            {/* TEXT CONTAINER */}
                            <div className='col-xs-12 col-sm-8 col-lg-9  _text-container ' data-aos="zoom-in">


                                <p className=' _text'> 
                                    Hola! mi nombre es Ezequiel Zapata, vivo en Buenos Aires, Argentina. Soy desarrollador web Full Stack Junior, la tolerancia, el respeto y compromiso son mis convicciones más profundas. Soy proactivo y autodidacta,
                                    me apasiona la tecnología, y aprender dia a dia nuevas herramientas para buscar soluciones creativas.
                                    
                                </p>
                            </div>


                        </div>





                        <div className='container-info c-two col-11 row'>

                                {/* DIPLOMA CONTAINER */}
                            <div className='col-12 col-sm-4 diploma-container' data-aos="zoom-out-right">
                            <a
                                    href={diplomaPDF}
                                    className=""
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    download
                                >
                                    
                                <img src={diploma} className='diploma' alt="Diploma Digital House " />
                            </a> 
                            </div>
                            
                            
                            <div className='col-12 col-sm-8  _text-container ' data-aos="zoom-in">

                                    {/* TEXT  */}
                                <p className=' _text'> 
                                    Capacitado en 
                                   <a href='https://www.digitalhouse.com/'  target="_blank"  rel="noreferrer"> <strong>Digital House </strong> </a>
                                      en Programación, y 
                                    <a href='https://www.fundacionformar.net/agencia-de-programacion' target="_blank"  rel="noreferrer"> <strong>Fundación Formar </strong> </a>
                                    en habilidades blandas y metodologías ágiles para una mayor eficiencia en el trabajo grupal
                                    y/o individual;  actualmente me encuentro estudiando en Udemy cursos
                                    de TypeScrypt y React avanzado, y planeo seguir con React Native y/o la tecnología que crea necesaria, según el proyecto en el que esté trabajando.
                                    Mi objetivo es crecer profesionalmente en el rubro IT.
                                </p>
                            </div>

                        </div>
                       
           
                    </div>   







                </div>

            </article>
        </section>
    )
}
