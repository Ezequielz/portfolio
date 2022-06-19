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

   function find_max(nums) {
        let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
        for (let num of nums) {
        if (num > max_num) {
        // (Fill in the missing line here)
          max_num = num
        }
      }
      return max_num;
     }

     console.log(find_max([1,2,3,4,5,6,7,8,20,14]))

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


