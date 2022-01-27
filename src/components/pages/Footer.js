import React from 'react'

export const Footer = ({ nocturnMode }) => {
    return (
        <footer className={ nocturnMode ? 'box-footer ': ' box-footer bf-nocturn' }>
            <div className=''>
                <p>Desarrollado por Ezequiel Zapata ©Todos los derechos reservados</p>

            </div>
        </footer>
    )
}
