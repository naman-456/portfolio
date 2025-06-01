import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
export const NavBar = () => {
    const location = useLocation()
    return (
        <div className="mynavbar">
                 <ul className="nav-list"> 
                    <li className={`nav-item ${location.pathname == '/' ? 'active': ''}`} >
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`nav-item ${location.pathname == '/myskills' ? 'active': ''}`}>
                        <Link to="/myskills">Skills</Link>
                    </li>
                    <li className={`nav-item ${location.pathname == '/experience' ? 'active': ''}`}>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li className={`nav-item ${location.pathname == '/education' ? 'active': ''}`}>
                        <Link to="/education">Education</Link>
                    </li>
                 </ul>
        </div>
     
    )
}
