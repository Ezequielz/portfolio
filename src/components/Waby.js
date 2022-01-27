import React from 'react'

export const Waby = ({ nocturnMode }) => {


    return (
        <div className={ nocturnMode ?  '__portfolio-spacer ' :  '__portfolio-spacer  wb-nocturn' }>

        
        
            <div className='__portfolio_waby mt-5'>
                <svg className='__portfolio_waby-svg' viewBox="0 0 500 150" preserveAspectRatio='none' >
                    <path 
                    className='__portfolio_waby-path' 
                    d="M-91.70,165.30 C152.64,-40.94 270.03,188.98 527.93,76.48 L500.00,150.00 L0.00,150.00 Z">
                    </path>
                  
                </svg>

            </div>
        </div>

    )
}
