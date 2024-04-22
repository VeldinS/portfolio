import './home.css'
import Navbar from "../../components/Navbar.tsx";

import veldinImg from '../../assets/veldin.png';
import javascriptImg from '../../assets/javascript.png';
import typescriptImg from '../../assets/typescript.png';
import reactImg from '../../assets/react.png';
import nextImg from '../../assets/next.png';
import mongoImg from '../../assets/mongo.png';
import webflowImg from '../../assets/webflow.jpg';

function Home() {
    return (
        <>
            <div className={"main-body"}>
                <Navbar/>
                <section className={"landing-section"}>
                    <div className={"landing-info-grid"}>
                        <div className={"landing-info-wrapper"}>
                            <h1 className={"name-heading-1"}>Hi, I’m Veldin</h1>
                            <p className={"landing-info"}>During these
                                <span className={"landing-info-span"}> 2 years </span>
                                as
                                <span className={"landing-info-span"}> Front-End Software Engineer. </span>
                                 My role
                                has extended beyond coding to effective communication with various departments, to
                                define new features and spearheading the development of new apps.</p>
                            <div className={"landing-info-buttons"}>
                                <button className={"cv-button"}>
                                    Download CV
                                </button>
                                <button className={"button-1"}>
                                    See projects
                                </button>
                            </div>
                        </div>
                        <div className={"landing-info-image"}>
                            <img className={"my-image"} src={veldinImg} alt={"Image of Veldin"} />
                        </div>
                    </div>
                </section>
                <section className={"landing-experience-section"}>
                    <div className={"landing-experience-info"}>
                        <p className={"experience-text-1"}>2 years of</p>
                        <h1 className={"experience-heading-1"}>XP</h1>
                        <p className={"experience-text-2"}>with the most popular fullstack ecosystem</p>
                        <div className={"linear-gradient-1"} ></div>
                    </div>
                    <div className={"landing-experience-cards"}>
                        <div className={"carousel-card-1"}>
                            <img className={"card-image"} src={javascriptImg} alt={"Javascript logo"}/>
                            <p className={"card-name"}>Javascript</p>
                        </div>
                        <div className={"carousel-card-2"}>
                            <img className={"card-image"} src={typescriptImg} alt={"Typescript logo"}/>
                            <p className={"card-name"}>Typescript</p>
                        </div>
                        <div className={"carousel-card-3"}>
                            <img className={"card-image"} src={reactImg} alt={"React.js logo"}/>
                            <p className={"card-name"}>React.js</p>
                        </div>
                        <div className={"carousel-card-4"}>
                            <img className={"card-image"} src={nextImg} alt={"Next.js logo"}/>
                            <p className={"card-name"}>Next.js</p>
                        </div>
                        <div className={"carousel-card-5"}>
                            <img className={"card-image"} src={mongoImg} alt={"Mongo logo"}/>
                            <p className={"card-name"}>Mongo</p>
                        </div>
                        <div className={"carousel-card-6"}>
                            <img className={"card-image"} src={webflowImg} alt={"Webflow logo"}/>
                            <p className={"card-name"}>Webflow</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;