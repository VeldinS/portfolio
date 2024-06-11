import './projects.css'
import Navbar from "../../components/Navbar/Navbar.tsx";
import {Link} from "react-router-dom";
import Project from "../../components/Project/Project.tsx";

import project1Img from '../../assets/projects/Fetch-thumbnail.png';
import project2Img from '../../assets/projects/synteq-thumbnail.png';
import project3Img from '../../assets/projects/gema-thumbnail.png';
import project4Img from '../../assets/projects/sunray-dev-thumbnail.png';
import project5Img from '../../assets/projects/optical-gallery-thumbnail.png';
import project6Img from '../../assets/projects/sunray-media-thumbnail.png';
import project7Img from '../../assets/projects/constructit-thumbnail.png';

import Footer from "../../components/Footer/Footer.tsx";
import {useEffect} from "react";

function Projects() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className={'main-body'}>
            <Navbar />
            <section className={'projects-wrapper'}>
                <div className={"page-info-wrapper"}>
                    <h1 className={"page-info-heading"}>
                        {"< Here, you can see"}
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
                             development={true}
                             design={true}
                             seo={true}
                             analytics={true}
                    />
                    <Project title={'Synteq'} subtitle={'Digital Agency Website'}
                             description={'Contributed to the development of website for Synteq, highlighting their services in web development, SEO, and strategic marketing, while emphasizing their streamlined project process.'}
                             link={'https://synteq.dev/'}
                             alignment={'right'}
                             image={project2Img}
                             development={true}
                             design={true}
                             seo={true}
                             analytics={true}
                    />
                    <Project title={'Construct.IT'} subtitle={'Digital Agency Website'}
                             description={'Leading development efforts for Construct.IT\'s online presence, showcasing their expertise in crafting custom web solutions and digital experiences.'}
                             link={'https://construct-it.vercel.app/'}
                             alignment={'left'}
                             image={project7Img}
                             development={true}
                             design={true}
                             seo={true}
                             analytics={true}
                    />
                    <Project title={'Gema'} subtitle={'Premium Clothing Web-shop'}
                             description={'Collaborated on the development of Gema\'s online presence, enhancing the user experience through modern design and intuitive navigation to showcase their premium product offerings.'}
                             link={'https://gema.ba/'}
                             alignment={'right'}
                             image={project3Img}
                             development={true}
                             seo={true}
                             analytics={true}
                    />
                    <Project title={'sunray dev'} subtitle={'Company Profile'}
                             description={'As part of the Sunray team, contributed to the development of their solutions-focused website, emphasizing their expertise in creating startups, empowering founders, and building innovative media platforms.'}
                             link={'https://www.sunray.dev/'}
                             alignment={'left'}
                             image={project4Img}
                             development={true}
                             seo={true}
                             analytics={true}
                    />
                    <Project title={'sunray media'} subtitle={'Digital Media Agency Website'}
                             description={'Collaborated with the Sunray team to design and implement a modern, engaging website that showcases Sunray Media\'s diverse services and brand identity.'}
                             link={'https://sunray.media/'}
                             alignment={'right'}
                             image={project6Img}
                             development={true}
                             seo={true}
                             analytics={true}
                    />
                    <Project title={'Optical Gallery'} subtitle={'E-commerce Eyewear Platform'}
                             description={'Collaborated with Sunray\'s team to develop an intuitive and visually appealing e-commerce platform for Optical Gallery, focused on optimizing the user experience and purchase process.'}
                             link={'https://www.opticalgallery.ba/'}
                             alignment={'left'}
                             image={project5Img}
                             development={true}
                             seo={true}
                             analytics={true}
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Projects;