import React from 'react'
import githubImg from "../../media/gitHub.svg"
import web from "../../media/web.svg"
import { ButtonCard } from './ButtonCard'

export const OptionsCard = ({ project,handleFlip,isFlipped,nocturnMode }) => {

    const { github, url } = project


    return (

        <div className='row  col-12 box-project_card-menu' >
                    
        <div className={ nocturnMode? 'col-3 box-project_card-web' : 'col-3 box-project_card-web bp-nocturn-web'} >
            <a href={ url } target="_blank" rel="noreferrer"> <img src={ web } alt="" /> </a>

        </div>
        <div className={ nocturnMode? 'col-3 box-project_card-git' : 'col-3 box-project_card-git bp-nocturn-git'} >
            <a href={github} target="_blank" rel="noreferrer"> <img src={githubImg} alt="" /></a>    

        </div>



        <ButtonCard 
            handleFlip={ handleFlip }
            isFlipped={isFlipped} 
            nocturnMode={ nocturnMode }
        />


    </div>


    )
}
