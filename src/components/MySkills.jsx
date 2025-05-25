import reactIcon from '../assets/icons/react.svg'
import reduxIcon from "../assets/icons/redux.svg"
import vueLogo from "../assets/icons/Vuejs.png"
import vuexStoreLogo from "../assets/icons/vuex-store.svg"
import iconNodejs from "../assets/icons/icons8-nodejs.svg"
import iconExpressjs from "../assets/icons/Express JS.png"
import logoGit from "../assets/icons/Git-Logo-2Color.png"
export const MySkills = () => {
    return (
        <>
           <ul className="skills-list">
              <li>
                <figure>
                    <img src={reactIcon} />
                </figure>
                <h3 className="mt5 ml20">React js</h3>
              </li>
              <li>
                <figure>
                   <img src={reduxIcon} className="redux-icon"/>
                </figure>
                <h3 className="mt5 ml20">Redux</h3>
              </li>
              <li>
                <figure>
                   <img src={vueLogo} className="icon-vue"/>
                </figure>
                <h3 className="mt5 ml20">Vuejs</h3>
              </li>
              <li>
                <figure>
                   <img src={vuexStoreLogo} className="icon-vue"/>
                </figure>
                <h3 className="mt5 ml20">Vuex</h3>
              </li>
              <li>
                <figure>
                   <img src={iconNodejs} />
                </figure>
                <h3 className="mt5 ml20">Node js</h3>
              </li>
              <li>
                <figure>
                   <img src={iconExpressjs} className="icon-express"/>
                </figure>
                <h3 className="mt5 ml20">Express js</h3>
              </li>
              <li>
                <figure>
                   <img src={logoGit} className="logo-git"/>
                </figure>
                <h3 className="mt5 ml20">Git</h3>
              </li>
           </ul>
        </>
    )
}