import { useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { gsap } from 'gsap'
;


export const NavBar = ({ nocturnMode, setNocturnMode }) => {

   

    const [ selected, setSelected ] = useState(false)
   

    const element = useRef();


 

    const handleNocturnMode = () => {
        setNocturnMode( !nocturnMode )
        const tl = gsap.timeline()
                        tl.to( element.current ,{ duration: 0.7,rotation: "+=360"} )
        localStorage.setItem('nocturnMode', nocturnMode)

    }

    const handleSelected = () => {
        setSelected( !selected )
    }

    const handleTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    return (

        <>
            <div className="row" >
                
                    <nav className={ nocturnMode? "navbar navbar-expand-sm navbar-dark  ": "navbar navbar-expand-sm navbar-dark nav-nocturn " }>
                        
                        <HashLink 
                            to="/"
                            className="navbar-brand navbar__logo " 
                            onClick={ handleTop }
                        >
                            <span className="name">&#60;Ezequiel</span> 
                            <span className="navbar__logo-apellido ">Zapata </span>
                            <span className="name">&#47;&#62;</span>
                        </HashLink>

                        <div className="col-6 col-sm-9">

                                <ul className={
                                    selected ? 
                                            ( nocturnMode ? 
                                                            " navbar__items active "
                                                            :"navbar__items active active-nocturn " 
                                            )
                                            
                                            : "navbar__items "
                                    
                                    } >

                                    <li
                                    
                                        className="navbar__items--section about connections "
                                        onClick={handleSelected}
                                    >
                                        <HashLink to="#aboutMe" className="connections__link">
                                            Sobre mi
                                        </HashLink>
                                    </li>
                                    <li
                                        className="navbar__items--section connections "
                                        onClick={handleSelected}
                                    >
                                        <HashLink to="#skills" className="connections__link">
                                            Habilidades
                                        </HashLink>
                                    </li>
                                    <li
                                        className="navbar__items--section connections "
                                        onClick={handleSelected}
                                    >
                                        <HashLink to="#projects" className="connections__link">
                                            Proyectos
                                        </HashLink>
                                    </li>
                                    <li
                                        className="navbar__items--section connections  "
                                        onClick={handleSelected}
                                        
                                    >
                                        <HashLink
                                            to="#contact"
                                            className="connections__link"
                                            // onClick={scrollToBottom}
                                        >
                                            Contacto
                                        </HashLink>
                                    </li>
                                 
                                    <li className="navbar__items--section connections sunMon col-1 mt-1 ">
                                        <span 
                                            ref={ element } 
                                            className={
                                                nocturnMode
                                                    ?  "fas fa-sun "
                                                    :    "fas fa-moon"
                                            }
                                            onClick={ handleNocturnMode }
                                        >
                                                
                                        </span>


                                    </li>




                                </ul>





                                <i
                                
                                    alt="Menú"
                                    className={
                                    selected
                                        ? "fas fa-times navbar__burger-nav "
                                        : "fas fa-bars navbar__burger-nav "
                                    }
                                    onClick={handleSelected}
                                ></i>

                        </div>



                        

                    </nav>

            </div>
        </>
    )
}
