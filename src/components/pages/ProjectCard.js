import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';


import { OptionsCard } from './OptionsCard';

export const ProjectCard = ({project, nocturnMode}) => {

    const {title, imagen,info} = project

    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip 
            isFlipped={isFlipped} 
            flipDirection="horizontal" 
            className='box-project_card'
        >           
            <div className={ nocturnMode ? 'box-project_card-flip   ': 'box-project_card-flip  bp-nocturn-flip' }>

                <div className='box-project_card-imagen-container'>
                    <img 
                        src={ imagen } 
                        alt={`imagen de proyecto ${title}`}  
                        className='box-project_card-project-img'
                    />
                    <h5 className='box-project_card-title mt-2'> {title} </h5 >
                </div>
                <hr />

                    <OptionsCard 
                        project={ project } 
                        handleFlip={handleFlip} 
                        nocturnMode={ nocturnMode }
                        
                    />

            </div>

            <div className={ nocturnMode ? 'box-project_card-flip   ': 'box-project_card-flip  bp-nocturn-flip' }>

                <div className='box-project_card-menu-container'>
                    <p className='box-project_card-infotext'> { info } </p>
                </div>

                <hr />

                    <OptionsCard 
                        project={ project }
                        handleFlip={handleFlip} 
                        isFlipped={isFlipped} 
                        nocturnMode={ nocturnMode }
                    />

            </div>


        </ReactCardFlip >
    )
}
