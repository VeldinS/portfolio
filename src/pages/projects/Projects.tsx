import './projects.css'
import Navbar from "../../components/Navbar/Navbar.tsx";
import {Link} from "react-router-dom";

function Projects() {
    return (
        <div className={'main-body'}>
            <Navbar />
            <div className={'projects-wrapper'}>
                <div className={"page-info-wrapper"}>
                    <h1 className={"page-info-heading"}>
                        {"< Here, you can see some of the "}
                        <br/>
                        <span className='page-info-heading-span'> projects </span>
                        {"that highlight"}
                        <span className='page-info-heading-span'> my career. </span>
                        {"/>"}
                    </h1>
                    <Link target="_blank" rel="noopener noreferrer" to={"https://veldin.dev/assets/Resume.pdf"}>
                        <button className={"cv-button"}>
                            Download CV
                        </button>
                    </Link>
                </div>

                <div className={'projects-list'}>

                </div>
            </div>
        </div>
    );
}

export default Projects;