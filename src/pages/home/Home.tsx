import {useEffect} from "react";

import {Link} from "react-router-dom";

import {motion} from "framer-motion";

import './home.css'

import Navbar from "../../components/Navbar/Navbar.tsx";
import TechCard from "../../components/TechCard/TechCard.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";
import HomeInfo from "../../components/HomeInfo/HomeInfo.tsx";

import veldinImg from '../../assets/veldin.png';
import javascriptImg from '../../assets/javascript.png';
import typescriptImg from '../../assets/typescript.png';
import reactImg from '../../assets/react.png';
import nextImg from '../../assets/next.png';
import mongoImg from '../../assets/mongo.svg';
import webflowImg from '../../assets/webflow.jpg';
import reactSVG from '../../assets/react.svg';
import nextSVG from '../../assets/next.svg';
import viteSVG from '../../assets/vite.svg';
import astroSVG from '../../assets/astro.svg';
import expressImg from '../../assets/express.png';
import nodeImg from '../../assets/node.png';
import shopifyImg from '../../assets/shopify.jpg';
import dockerImg from '../../assets/docker.jpg';
import kubernetesImg from '../../assets/kubernetes.png';
import githubImg from '../../assets/github-blue.svg'
import figmImg from '../../assets/figma.png'
import RevealComp from "../../components/Animations/reveal.tsx";


function Home() {

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
                <section className={"landing-section"}>
                    <div className={"landing-info-grid"}>
                        <HomeInfo />
                        <div className={"landing-info-image"}>
                            <div className={"linear-gradient-2"}></div>
                            <img className={"my-image"} src={veldinImg} alt={"Image of Veldin"}/>
                        </div>
                    </div>
                </section>
                <section className={"landing-experience-section"}>
                    <div className={"landing-experience-info"}>
                        <p className={"experience-text-1"}>Over 2 years of</p>
                        <h1 className={"experience-heading-1"}>experience</h1>
                        <p className={"experience-text-2"}>with the most popular fullstack ecosystem</p>
                        <div className={"linear-gradient-1"} ></div>
                    </div>
                    <div className={"landing-experience-cards"}>
                        <RevealComp delay={'200ms'} threshold={0.5} duration={'300ms'} x={-30} y={0}>
                            <div className={"carousel-card-3"}>
                                <img className={"card-image"} src={reactImg} alt={"React.js logo"}/>
                                <p className={"card-name"}>React.js</p>
                            </div>
                        </RevealComp>
                        <RevealComp delay={'400ms'} threshold={0.5} duration={'300ms'} x={-30} y={0}>
                            <div className={"carousel-card-4"}>
                                <img className={"card-image"} src={nextImg} alt={"Next.js logo"}/>
                                <p className={"card-name"}>Next.js</p>
                            </div>
                        </RevealComp>
                        <RevealComp delay={'600ms'} threshold={0.5} duration={'300ms'} x={-30} y={0}>
                            <div className={"carousel-card-2"}>
                                <img className={"card-image"} src={figmImg} alt={"Figma logo"}/>
                                <p className={"card-name"}>Figma</p>
                            </div>
                        </RevealComp>
                        <RevealComp delay={'200ms'} threshold={0.5} duration={'300ms'} x={-30} y={0}>
                            <div className={"carousel-card-1"}>
                                <img className={"card-image"} src={javascriptImg} alt={"Javascript logo"}/>
                                <p className={"card-name"}>Javascript</p>
                            </div>
                        </RevealComp>
                        <RevealComp delay={'400ms'} threshold={0.5} duration={'300ms'} x={-30} y={0}>
                            <div className={"carousel-card-5"}>
                                <img className={"card-image"} src={mongoImg} alt={"Mongo logo"}/>
                                <p className={"card-name"}>Mongo</p>
                            </div>
                        </RevealComp>
                        <RevealComp delay={'600ms'} threshold={0.5} duration={'300ms'} x={-30} y={0}>
                            <div className={"carousel-card-6"}>
                                <img className={"card-image"} src={webflowImg} alt={"Webflow logo"}/>
                                <p className={"card-name"}>Webflow</p>
                            </div>
                        </RevealComp>
                    </div>
                </section>
                <section className={"landing-links-section"}>
                    <RevealComp delay={'200ms'} threshold={0.5} duration={'300ms'} x={-30} y={0}>
                        <Link to={'/education'}><h1 className={"landing-link-1"}>Education</h1></Link>
                    </RevealComp>
                    <RevealComp delay={'400ms'} threshold={0.5} duration={'300ms'} x={30} y={0}>
                        <Link to={'/experience'}><h1 className={"landing-link-2"}>Experience</h1></Link>
                    </RevealComp>
                    <RevealComp delay={'600ms'} threshold={0.5} duration={'300ms'} x={-30} y={0}>
                        <Link to={'/projects'}><h1 className={"landing-link-3"}>Projects</h1></Link>
                    </RevealComp>
                </section>
                <section className={"landing-tech-section"}>
                    <div className={"linear-gradient-2"}></div>
                    <h1 className={"landing-tech-heading"}>These are <br/>
                        the <span className={"landing-tech-heading-span"}> technologies </span> I’ve been using
                    </h1>
                    <div className={"landing-tech-cards"}>
                        <TechCard cardName={"Front-end Technologies"}
                                  tech1={"ReactJS"} tech1Img={reactSVG}
                                  tech2={"NextJS"} tech2Img={nextSVG}
                                  tech3={"Vite"} tech3Img={viteSVG}
                                  tech4={"Astro"} tech4Img={astroSVG}
                                  tech5={"Webflow"} tech5Img={webflowImg}
                        />
                        <TechCard cardName={"Languages"}
                                  tech1={"Javascript"} tech1Img={javascriptImg}
                                  tech2={"Typescript"} tech2Img={typescriptImg}
                        />
                        <TechCard cardName={"Back-end Technologies"}
                                  tech1={"Node.js"} tech1Img={nodeImg}
                                  tech2={"Express.js"} tech2Img={expressImg}
                                  tech3={"Mongo"} tech3Img={mongoImg}
                        />
                        <TechCard cardName={"No-code Technologies"}
                                  tech1={"Webflow"} tech1Img={webflowImg}
                                  tech2={"Shopify"} tech2Img={shopifyImg}
                        />
                        <TechCard cardName={"Devops"}
                                  tech1={"GitHub"} tech1Img={githubImg}
                                  tech2={"Docker"} tech2Img={dockerImg}
                                  tech3={"Kubernetes"} tech3Img={kubernetesImg}
                        />
                    </div>
                </section>
                <ContactForm/>
                <Footer/>
            </motion.div>
    );
}

export default Home;