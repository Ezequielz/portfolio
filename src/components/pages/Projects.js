import React from 'react'
import data from '../../data/data.js'
import { ProjectCard } from './ProjectCard'

export const Projects = ({ nocturnMode }) => {


    return (
        <section className={ nocturnMode ? 'box-project   ': 'box-project bp-nocturn' } id='projects' >

            <article>
                
                <h3 className='mt-5'>Mis proyectos</h3>

                <hr />

                <div className='row box-project_container'>

                        {
                            data.map(project => 
                                <div className='col-12 col-sm-6 col-lg-4 col-xl-3 mt-3 box-project_card-box' key={project.id}>

                                        <ProjectCard project={project} nocturnMode={ nocturnMode } />

                                </div>
                            )
                        }

                </div>





            </article>
            
        </section>

    )
}