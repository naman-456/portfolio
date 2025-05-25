import { Link } from "react-router-dom"
export const NavBar = () => {
    return (

        <div className="mynavbar">
                 <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/myskills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/experience">Experience</Link>
                    </li>
                 </ul>
        </div>
     
    )
}
