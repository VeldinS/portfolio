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


function Education() {
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
                        />

                        <EduCard cardImg={udemyLogo}
                                 cardName={"React and Typescript"}
                                 cardField={"Udemy"}
                                 startDate={"Jan, 2023"}
                                 cardLink={"https://www.udemy.com/certificate/UC-87718e87-e3dd-4590-8f5f-4f1394bfc828/"}
                        />

                        <EduCard cardImg={udemyLogo}
                                 cardName={"Next.js 14 & React"}
                                 cardField={"Udemy"}
                                 startDate={"2024"}
                                 cardLink={"/Next&React"}
                        />

                        <EduCard cardImg={udemyLogo}
                                 cardName={"Microservices with NodeJS and React"}
                                 cardField={"Udemy"}
                                 startDate={"2024"}
                                 cardLink={"/Microservices&React"}
                        />


                        <EduCard cardImg={udemyLogo}
                                 cardName={"HTML, CSS and Sass"}
                                 cardField={"Udemy"}
                                 startDate={"Jan, 2022"}
                                 cardLink={"https://www.udemy.com/certificate/UC-620af7d7-d2d6-4c80-83c6-3e970d434400/"}
                        />

                        <EduCard cardImg={miboLogo}
                                 cardName={"Networking Workshop"}
                                 cardField={"MIBO Komunikacije"}
                                 startDate={"Jun, 2022"}
                                 cardLink={"/MIBOWorkshop"}
                        />

                        <EduCard cardImg={ciscoLogo}
                                 cardName={"CCNA Introduction to Networks"}
                                 cardField={"Cisco"}
                                 startDate={"Jun, 2022"}
                                 cardLink={"https://www.credly.com/badges/b0e26c3b-8bc6-47b4-a934-e47e474c2a47"}
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