import './education.css'

import Navbar from "../../components/Navbar/Navbar.tsx";
import EduCard from "../../components/EducationCard/EduCard.tsx";

import iusLogo from '../../assets/ius.png';
import rpsLogo from '../../assets/rps.png';
import miboLogo from '../../assets/mibo.png';
import udemyLogo from '../../assets/udemy.png';
import ciscoLogo from '../../assets/cisco.png';
import Footer from "../../components/Footer/Footer.tsx";
import Typewriter from "typewriter-effect";


function Education() {

    const handleDownload = () => {
        const cvPath = '../../assets/CV.pdf';

        // Create a link element
        const link = document.createElement('a');
        link.href = cvPath;
        link.setAttribute('download', 'CV.pdf');
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

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
                        <button onClick={handleDownload} className={"cv-button"}>
                            Download CV
                        </button>
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
                                 cardLink={"/IusCertificate"}
                        />

                        <EduCard cardImg={rpsLogo}
                                 cardName={"College"}
                                 cardField={"Richmond Park College"}
                                 startDate={"Sep, 2015"} endDate={"Jun, 2019"}
                                 cardLink={"/RpsCertificate"}
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
                                 cardLink={"/UdemyMERN"}
                        />

                        <EduCard cardImg={udemyLogo}
                                 cardName={"React and Typescript"}
                                 cardField={"Udemy"}
                                 startDate={"Jan, 2023"}
                                 cardLink={"/UdemyReactTs"}
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
                                 cardLink={"/HTML&CSS&Sass"}
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
                                 cardLink={"/CiscoCCNA"}
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