import React from 'react'

export const Skills = ({ nocturnMode }) => {


    return (
        <section className={ nocturnMode ? 'box-skill ': 'box-skill bs-nocturn' } id='skills'>
            <article >

                    <h3  className='mt-5'>Habilidades</h3>

                    <hr />
                    <div className='row box-skill__skill-conteiner'>
                    {/* DESARROLLO */}
                    <div className='col-12 col-sm-6 col-lg-4  box-skill__skill-card mt-4'>
                        <div className={ nocturnMode ? 'box-skill__skill-card-border': 'box-skill__skill-card-border box-skill-nocturn-border' }>
                            <h4 className='mt-3'>Desarrollo</h4>
                            <hr />
                            <div className='row col-12  box-skill__skill-card-iconsContainer'>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src="https://jesus1811.github.io/recursosPortafolio/javascript.svg" alt="" />
                                    <p>javaScript</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                <img src="https://jesus1811.github.io/recursosPortafolio/react.svg" alt="" />
                                    <p>React.js</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src="https://img.icons8.com/windows/512/nodejs.png" alt="" />
                                    <p>Node.js</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src="https://jesus1811.github.io/recursosPortafolio/git.svg" alt="" />
                                    <p>Git</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/npm-3445767-2878693.png" alt="" />
                                    <p>Npm</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3628347-3032182.png" alt="" />
                                    <p>MongoDB</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/firebase-512.png" alt="" />
                                    <p>Firebase</p>
                                </div>
                                <div className='col-6 col-lg-4 mt-3 box-skill__skill-card-iconsContainer_icon'>
                                    <img className='' src="http://pngimg.com/uploads/mysql/mysql_PNG3.png" alt="" />
                                    <p className='mt-3'>MySQL</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src="https://findicons.com/files/icons/2779/simple_icons/512/visualstudio_512_black.png" alt="" />
                                    <p>VSC</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* MAQUETACION */}

                    <div className='row col-sm-6 col-lg-8 skill-group mt-4'>
                        <div className='col-12 col-lg-6 box-skill__skill-card'>
                            <div className={ nocturnMode ? 'box-skill__skill-card-border': 'box-skill__skill-card-border box-skill-nocturn-border' }>
                                <h4 className='mt-3'>Maquetado</h4>
                                <hr />
                                <div className='row col-12  box-skill__skill-card-iconsContainer'>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src="https://jesus1811.github.io/recursosPortafolio/html.svg" alt="" />
                                        <p>HTML5</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src="https://jesus1811.github.io/recursosPortafolio/css.svg" alt="" />
                                        <p>CSS</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-3/512/288_Sass-512.png" alt="" />
                                        <p>Sass</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src="https://www.pngrepo.com/png/330083/512/bootstrap.png" alt="" />
                                        <p>Bootstrap</p>
                                    </div>



                                </div>
                            </div>
                        </div>
                        {/* ORGANIZACION */}
                        <div className='col-12 col-lg-6 box-skill__skill-card'>
                            <div className={ nocturnMode ? 'box-skill__skill-card-border': 'box-skill__skill-card-border box-skill-nocturn-border' }>
                                <h4 className='mt-3'>Organización</h4>
                                <hr />
                                <div className='row col-12  box-skill__skill-card-iconsContainer'>

                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src="https://jesus1811.github.io/recursosPortafolio/github.svg" alt="" />
                                        <p>GitHub</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/slack-1521499-1288241.png" alt="" />
                                        <p>Slack</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25388.png" alt="" />
                                        <p>Trello</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src="https://library.kissclipart.com/20181220/cfe/kissclipart-scrum-icon-clipart-scrum-agile-software-developmen-46d1652d4bb0c89a.png" alt="" />
                                        <p>Scrum</p>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>



                    </div>


                    


            </article>
        </section>
    )
}
