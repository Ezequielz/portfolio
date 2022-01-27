import React, { useEffect, useState } from 'react'
import { NavBar } from './components/ui/NavBar'
import { BrowserRouter } from "react-router-dom";
import { Waby } from './components/Waby';
import { About } from './components/pages/About';
import { Projects } from './components/pages/Projects';
import { Skills } from './components/pages/Skills';
import { Contact } from './components/pages/Contact';
import { Footer } from './components/pages/Footer';
import { WelcomeCard } from './components/WelcomeCard';
import { WabyFooter } from './components/WabyFooter';

export const PortfolioApp = () => {

  const initialNocturnState = JSON.parse( localStorage.getItem('nocturnMode') )
  const [ nocturnMode, setNocturnMode ] = useState(initialNocturnState)
  

  useEffect(() => {
   
    localStorage.setItem('nocturnMode', nocturnMode)
  }, [nocturnMode])


  return (
    <div>
      <BrowserRouter>
            <Waby nocturnMode={nocturnMode} />
          <WelcomeCard  nocturnMode={nocturnMode} />


            <NavBar
             initialNocturnState={ initialNocturnState }
             setNocturnMode={setNocturnMode}
             nocturnMode={nocturnMode}
             />

            <About nocturnMode={nocturnMode} />
            <Skills  nocturnMode={nocturnMode}/>
            <Projects nocturnMode={nocturnMode} />
            <Contact nocturnMode={nocturnMode} />

      </BrowserRouter>
      <WabyFooter nocturnMode={nocturnMode} />
      <Footer nocturnMode={nocturnMode}  />
    </div>
  )
}


