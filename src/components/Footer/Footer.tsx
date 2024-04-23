import './footer.css'
import '../Navbar/navbar.css'
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import mailIcon from "../../assets/mail.svg";

function Footer() {
    return (
        <div className={"footer"}>
            <div className={"footer-main"}>
                <p className={"footer-text-1"}>Follow me</p>
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
            <p className={"footer-text-2"}>veldin © 2024</p>
        </div>
    );
}

export default Footer;