
import css from '../../images/css3.png'
import sass from '../../images/sass.png'
import bootstrap from '../../images/bootstrap.png'
import js from '../../images/js.png'
import ts from '../../images/typescript.png'
import react from '../../images/react.png'
import nodejs from '../../images/nodejs.png'
import git from '../../images/Git.png'
import npm from '../../images/npm.png'
import next from '../../images/next.png'
import mu from '../../images/mu.png'
import html from '../../images/html.png'
import mongo from '../../images/mongo.png'
import firebase from '../../images/firebase.png'
import mysql from '../../images/mysql.png'
import vsc from '../../images/vsc.png'
import github from '../../images/github.png'
import slack from '../../images/slack.png'
import trello from '../../images/trello.png'
import scrum from '../../images/scrum.png'


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
                                    <img src={js} alt="" />
                                    <p>javaScript</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src={ts} alt="" />
                                    <p>TypeScript</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                <img src={react} alt="" />
                                    <p>React.js</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src={next} alt="" />
                                    <p>NEXT.js</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src={nodejs} alt="" />
                                    <p>Node.js</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src={git} alt="" />
                                    <p>Git</p>
                                </div>

                                {/* <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src={npm} alt="" />
                                    <p>Npm</p>
                                </div> */}
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src={mongo} alt="" />
                                    <p>MongoDB</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src={firebase} alt="" />
                                    <p>Firebase</p>
                                </div>
                                <div className='col-6 col-lg-4 mt-3 box-skill__skill-card-iconsContainer_icon'>
                                    <img className='' src={mysql} alt="" />
                                    <p className='mt-3'>MySQL</p>
                                </div>
                                <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                    <img src={vsc} alt="" />
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
                                        <img src={html} alt="" />
                                        <p>HTML5</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src={css} alt="css.png" />
                                        <p>CSS</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src={mu} alt="mu.png" />
                                        <p>Material UI</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src={sass} alt="sass.png" />
                                        <p>Sass</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src={bootstrap} alt="bootstrap.png" />
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
                                        <img src={github} alt="" />
                                        <p>GitHub</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src={slack} alt="" />
                                        <p>Slack</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src={trello} alt="" />
                                        <p>Trello</p>
                                    </div>
                                    <div className='col-6 col-lg-4 box-skill__skill-card-iconsContainer_icon'>
                                        <img src={scrum} alt="" />
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
