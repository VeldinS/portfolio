import { useEffect } from "react";

import './experience.css'
import '../education/education.css'

import {Link} from "react-router-dom";
import Typewriter from "typewriter-effect";

import {motion} from "framer-motion";

import Navbar from "../../components/Navbar/Navbar.tsx";
import ExpCard from "../../components/ExperienceCard/ExpCard.tsx";
import Footer from "../../components/Footer/Footer.tsx";


function Experience() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
            className={"main-body"}>
            <Navbar />
            <div className={"experience-cards-wrapper"}>
                <div className={"page-info-wrapper"}>
                    <h1 className={"page-info-heading"}>
                        {"< Here, you can know me a little more and see my"}<br/> {"whole experience as a"}
                        <span className='page-info-heading-span'> Full-stack Software Engineer. </span>
                        {"/>"}
                    </h1>
                    <Link target="_blank" rel="noopener noreferrer" to={"https://veldin.dev/assets/Resume.pdf"}>
                        <button className={"cv-button"}>
                            Download CV
                        </button>
                    </Link>
                </div>

                <div className={"experience-wrapper"}>
                    <div className={"linear-gradient-3"}></div>
                    <h1 className={"education-cards-heading"}><Typewriter
                        options={{
                            strings: ['Experience', 'Companies', 'Work'],
                            autoStart: true,
                            loop: true
                        }}
                    /></h1>

                    <ExpCard cardName={"Full-stack Developer"}
                             cardEmploymentType={"Full-time"}
                             startDate={"Aug, 2023"}
                             endDate={"May, 2024"}
                             location={"Sarajevo"}
                             company={"sunray"}
                             paragraph1={"As a Full-Stack developer in Sarajevo, I honed expertise in both frontend and backend development, crafting fully-functional platforms with real-time data."}
                             paragraph2={"Specializing in e-commerce websites, I ensured seamless user experiences and robust functionalities, contributing to projects from inception to execution over 9 months."}
                    />

                    <ExpCard cardName={"Front-end Developer"}
                             cardEmploymentType={"Contractor"}
                             startDate={"Feb, 2023"}
                             endDate={"Aug, 2023"}
                             location={"Sarajevo"}
                             company={"Synteq"}
                             paragraph1={"During my tenure as a Frontend Developer at Synteq, I engaged in contract projects for local businesses, focusing on website development and maintenance."}
                             paragraph2={"Embracing Agile methodologies, I collaborated closely with clients, delivering responsive designs and ensuring consistent website performance across multiple platforms over 5 months."}

                    />
                    <ExpCard cardName={"Software Engineer"}
                             cardEmploymentType={"Internship"}
                             startDate={"Oct, 2022"}
                             endDate={"Jan, 2023"}
                             location={"Sarajevo"}
                             company={"NLB"}
                             paragraph1={"In the role of Software Engineer - Database Management in Sarajevo, I acquired fundamental knowledge of database management principles."}
                             paragraph2={"Witnessed firsthand the importance of secure database practices in real-world applications, laying a foundational understanding within a dynamic environment over 3 months."}
                    />
                    <ExpCard cardName={"Full-stack Engineer"}
                             cardEmploymentType={"Full-time"}
                             startDate={"Apr, 2022"}
                             endDate={"Sep, 2022"}
                             location={"Sarajevo"}
                             company={"Gema"}
                             paragraph1={"As a Full-stack Developer, I spearheaded web-shop creation and administration, streamlining online operations for optimal efficiency."}
                             paragraph2={"Leveraging web development skills, I enhanced user experiences and maintained dynamic digital interfaces, fostering improved website management within a bustling business landscape over 5 months."}
                    />
                </div>
            </div>
            <Footer />
        </motion.div>
    );
}

export default Experience;