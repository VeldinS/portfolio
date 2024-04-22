import './navbar.css'
import {Link, useLocation} from "react-router-dom";

import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import mailIcon from '../assets/mail.svg';

function Navbar() {

    const location = useLocation();

    return (
        <>
            <div className={"navbar"}>
                <div className={"navbar-content"}>
                    <Link className={`navlink ${location.pathname === '/' ? 'navlink-active' : ''}`}
                          to="/">veldinsalcinovic
                    </Link>
                    <Link className={`navlink ${location.pathname === '/education' ? 'navlink-active' : ''}`}
                          to="/education">education
                    </Link>
                    <Link className={`navlink ${location.pathname === '/experience' ? 'navlink-active' : ''}`}
                          to="/experience">experience
                    </Link>
                    <div className={"navbar-social-icons"}>
                        <a href={"https://github.com/VeldinS"}>
                            <img className={"social-media-icon"} src={githubIcon} alt={"github icon"}/>
                        </a>
                        <a href={"https://www.linkedin.com/in/veldin-sal%C4%8Dinovi%C4%87-534294249/"}>
                            <img className={"social-media-icon"} src={linkedinIcon} alt={"linkedin icon"}/>
                        </a>
                        <a href={"mailto: veldinsalcinovic123@gmail.com"}>
                            <img className={"social-media-icon"} src={mailIcon} alt={"email icon"}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;