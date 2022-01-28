import React from 'react'

export const WelcomeCard = ({ nocturnMode }) => {
    return (
        <div className={ nocturnMode ?'_welcome row container-fluid' : '_welcome bw-nocturn row container-fluid' }  >

            <div className='col-12  col-lg-6 home-text-container'>
                <h1 className=' title'> Ezequiel Zapata</h1>
                <h2 className=' row subtitle'> Desarrollador web Full Stack  </h2>

            </div>

            <div className='row col-12  col-lg-6 home-images-container '>
                <img 
                    className='col-12'
                    src="https://smartrural.net/wp-content/uploads/desarrollo-de-sotware-smartrural.png"
                    alt="" 
                />

            </div>
        </div>
    )
}
