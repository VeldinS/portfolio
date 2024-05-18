import {useEffect} from "react";

import './education.css'

import Typewriter from "typewriter-effect";
import {Link} from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar.tsx";
import EduCard from "../../components/EducationCard/EduCard.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import iusLogo from '../../assets/ius.png';
import rpsLogo from '../../assets/rps.png';
import miboLogo from '../../assets/mibo.png';
import udemyLogo from '../../assets/udemy.png';
import ciscoLogo from '../../assets/cisco.png';
import dcokerLogo from '../../assets/docker.jpg';
import expressLogo from '../../assets/express.png';
import nextLogo from '../../assets/next.svg';
import githubLogo from '../../assets/github.svg';
import javascriptLogo from '../../assets/javascript.png';
import typescriptLogo from '../../assets/typescript.png';
import kubernetesLogo from '../../assets/kubernetes.png';
import mongoLogo from '../../assets/mongo.png';
import nodeLogo from '../../assets/node.png';
import reactLogo from '../../assets/react.svg';
import webflowLogo from '../../assets/webflow.jpg';
import tailwindLogo from '../../assets/tailwind.png';
import shopifyLogo from '../../assets/shopify.jpg';
import viteLogo from '../../assets/vite.svg';
import figmaLogo from '../../assets/figma.png';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';

function Education() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <>
            <div className={"main-body"}>
                <Navbar/>
                <section className={"education-cards-wrapper"}>
                    <div className={"page-info-wrapper"}>
                        <h1 className={"page-info-heading"}>
                            {"< Here, you can see my certificates and courses"}<br/> {"achieved throughout"}
                            <span className='page-info-heading-span'> my education. </span>
                            {"/>"}
                        </h1>
                        <Link target="_blank" rel="noopener noreferrer" to={"https://drive.google.com/file/d/1OlU5W8xeHP5l7vkOrF7WceqN-C5NcrdO/view?usp=sharing"}>
                            <button className={"cv-button"}>
                                Download CV
                            </button>
                        </Link>
                    </div>

                    <div className={"education-wrapper"}>
                        <div className={"linear-gradient-3"}></div>
                        <h1 className={"education-cards-heading"}><Typewriter
                            options={{
                                strings: ['Education', 'University', 'Diplomas'],
                                autoStart: true,
                                loop: true
                            }}
                        /></h1>
                        <EduCard cardImg={iusLogo}
                                 cardName={"Software Engineering Bachelor"}
                                 cardField={"International University of Sarajevo"}
                                 startDate={"Oct, 2019"} endDate={"Jun, 2023"}
                        />

                        <EduCard cardImg={rpsLogo}
                                 cardName={"College"}
                                 cardField={"Richmond Park College"}
                                 startDate={"Sep, 2015"} endDate={"Jun, 2019"}
                        />
                    </div>
                    <div className={"certificates-wrapper"}>
                        <div className={"linear-gradient-4"}></div>
                        <h1 className={"education-cards-heading"}>
                            <Typewriter
                                options={{
                                    strings: ['Certificates', 'Courses', 'Achievements'],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h1>
                        <EduCard cardImg={udemyLogo}
                                 cardName={"MERN Fullstack"}
                                 cardField={"Udemy"}
                                 startDate={"Jan, 2023"}
                                 cardLink={"https://www.udemy.com/certificate/UC-d1020728-5b81-491c-91a0-59fbd282eaca/"}
                                 techImg1={reactLogo}
                                 techImg2={nodeLogo}
                                 techImg3={expressLogo}
                                 techImg4={mongoLogo}
                                 techImg5={githubLogo}
                                 techImg6={viteLogo}
                        />

                        <EduCard cardImg={udemyLogo}
                                 cardName={"React and Typescript"}
                                 cardField={"Udemy"}
                                 startDate={"Jan, 2023"}
                                 cardLink={"https://www.udemy.com/certificate/UC-87718e87-e3dd-4590-8f5f-4f1394bfc828/"}
                                 techImg1={reactLogo}
                                 techImg2={typescriptLogo}
                                 techImg3={githubLogo}
                                 techImg4={tailwindLogo}
                        />

                        <EduCard cardImg={udemyLogo}
                                 cardName={"Next.js 14 & React"}
                                 cardField={"Udemy"}
                                 startDate={"2024"}
                                 cardLink={"/Next&React"}
                                 techImg1={nextLogo}
                                 techImg2={reactLogo}
                                 techImg3={githubLogo}
                                 techImg4={tailwindLogo}
                        />

                        <EduCard cardImg={udemyLogo}
                                 cardName={"Figma UI UX"}
                                 cardField={"Udemy"}
                                 startDate={"2024"}
                                 cardLink={"/Figma"}
                                 techImg1={figmaLogo}
                        />

                        <EduCard cardImg={udemyLogo}
                                 cardName={"Microservices with NodeJS and React"}
                                 cardField={"Udemy"}
                                 startDate={"2024"}
                                 cardLink={"/Microservices&React"}
                                 techImg1={reactLogo}
                                 techImg2={nodeLogo}
                                 techImg3={expressLogo}
                                 techImg4={dcokerLogo}
                                 techImg5={kubernetesLogo}
                        />

                        <EduCard cardImg={webflowLogo}
                                 cardName={"No-code Development"}
                                 cardField={"Webflow"}
                                 startDate={"2023"}
                                 cardLink={"/Webflow"}
                                 techImg1={webflowLogo}
                                 techImg2={shopifyLogo}
                        />


                        <EduCard cardImg={udemyLogo}
                                 cardName={"HTML, CSS and Sass"}
                                 cardField={"Udemy"}
                                 startDate={"Jan, 2022"}
                                 cardLink={"https://www.udemy.com/certificate/UC-620af7d7-d2d6-4c80-83c6-3e970d434400/"}
                                 techImg1={htmlLogo}
                                 techImg2={cssLogo}
                                 techImg3={javascriptLogo}
                        />

                        <EduCard cardImg={miboLogo}
                                 cardName={"Networking Workshop"}
                                 cardField={"MIBO Komunikacije"}
                                 startDate={"Jun, 2022"}
                                 cardLink={"/MIBOWorkshop"}
                                 techImg1={ciscoLogo}
                        />

                        <EduCard cardImg={ciscoLogo}
                                 cardName={"CCNA Introduction to Networks"}
                                 cardField={"Cisco"}
                                 startDate={"Jun, 2022"}
                                 cardLink={"https://www.credly.com/badges/b0e26c3b-8bc6-47b4-a934-e47e474c2a47"}
                                 techImg1={ciscoLogo}
                        />

                    </div>
                </section>
                <Footer/>
                <div className={"linear-gradient-5"}></div>
            </div>
        </>
    );
}

export default Education;