
import { PortfolioHeader } from "./PortfolioHeader";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import { MySkills } from "./MySkills";
import { MyExperience } from "./MyExperience";
import  { Education} from "./Education"
import { MyProjects } from "./MyProjects";
const MyPortfolio = () => {
    const [enableDarkMode, setDarkMode] = useState(true)
    console.log('setDarkMode :', setDarkMode);
    const location = useLocation()
    console.log('current url info :', location)
    return (
        <>
          <PortfolioHeader  />
          <div className="port-cont">
            <div className={ 'nav-block bg-light-black'}>
              <NavBar />
            </div>
            <div className={'portfolio-view-content' + (enableDarkMode ?' bg-black text-white': '')} >
                { location.pathname == '/' && <Home />}
                { location.pathname == '/myskills' && <MySkills />} 
                { location.pathname == '/experience' && <MyExperience /> }
                { location.pathname == '/education' && <Education /> }
                { location.pathname == '/projects' && <MyProjects />}
            </div>
          </div>    
        </>
    )
}

export default MyPortfolio;