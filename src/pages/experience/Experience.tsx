import './experience.css'
import '../education/education.css'
import Navbar from "../../components/Navbar/Navbar.tsx";
import Typewriter from "typewriter-effect";
import ExpCard from "../../components/ExperienceCard/ExpCard.tsx";
import Footer from "../../components/Footer/Footer.tsx";

function Experience() {

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
        <div  className={"main-body"}>
            <Navbar />
            <div className={"experience-cards-wrapper"}>
                <div className={"page-info-wrapper"}>
                    <h1 className={"page-info-heading"}>
                        {"< Here, you can know me a little more and see my"}<br/> {"whole experience as a"}
                        <span className='page-info-heading-span'> Full-stack Software Engineer. </span>
                        {"/>"}
                    </h1>
                    <button onClick={handleDownload} className={"cv-button"}>
                        Download CV
                    </button>
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
        </div>
    );
}

export default Experience;