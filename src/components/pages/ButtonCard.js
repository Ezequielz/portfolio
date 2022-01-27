import React from 'react'

export const ButtonCard = ({handleFlip,isFlipped,nocturnMode}) => {

    

    return (
        <div 
            className={ nocturnMode? 'col-6 box-project_card-switch' : 'col-6 box-project_card-switch bp-nocturn-switch' }  
            onClick={ handleFlip } 
            > 

                {
                    !isFlipped?
                       <span>Info <i className="fas fa-share-square"></i></span> 
                    : 
                       <span>Volver <i className="fas fa-reply"></i></span> 
         
                }
            
      

        </div>
    )
}
