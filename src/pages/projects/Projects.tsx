import './projects.css'
import Navbar from "../../components/Navbar/Navbar.tsx";
import {Link} from "react-router-dom";
import Project from "../../components/Project/Project.tsx";

import project1Img from '../../assets/projects/Fetch-thumbnail.png';
import project2Img from '../../assets/projects/synteq-thumbnail.png';


function Projects() {
    return (
        <div className={'main-body'}>
            <Navbar />
            <section className={'projects-wrapper'}>
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
                    <Project title={'Fetch'} subtitle={'Custom E-commerce Platform'}
                             description={'Independently designed, developed, and deployed a fully functional e-commerce platform using Next.js and Tailwind, demonstrating a strong grasp of the full product lifecycle.'}
                             link={'https://e-commerce-app-git-main-veldins-projects-efa77aa2.vercel.app/'}
                             alignment={'left'}
                             image={project1Img}
                    />
                    <Project title={'Synteq'} subtitle={'Digital Agency Website'}
                             description={'Contributed to the development of website for Synteq, highlighting their services in web development, SEO, and strategic marketing, while emphasizing their streamlined project process.'}
                             link={'https://synteq.dev/'}
                             alignment={'right'}
                             image={project2Img}
                    />
                </div>
            </section>
        </div>
    );
}

export default Projects;