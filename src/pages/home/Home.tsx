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
import mongoImg from '../../assets/mongo.png';
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


function Home() {
    return (
            <div className={"main-body"}>
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
                <section className={"landing-links-section"}>
                    <a href={'/education'}><h1 className={"landing-link-1"}>Education</h1></a>
                    <a href={'/experience'}><h1 className={"landing-link-2"}>Experience</h1></a>
                    <a href={'/experience'}><h1 className={"landing-link-3"}>Projects</h1></a>
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
            </div>
    );
}

export default Home;