import './home.css'
import Navbar from "../../components/Navbar.tsx";

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

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;