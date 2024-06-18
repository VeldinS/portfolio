import './project.css';
import {Link} from "react-router-dom";
import RevealComp from "../Animations/reveal.tsx";

interface ProjectProps {
    alignment: string,
    title: string,
    subtitle: string,
    description: string,
    link: string,
    image: any,
    development: boolean,
    design?: boolean,
    seo?: boolean,
    analytics?: boolean,
}

function Project(ProjectProps: ProjectProps): JSX.Element {
    return (
        <div className={`project-wrapper-${ProjectProps.alignment}`}>
            <div className={`project-heading-wrapper-${ProjectProps.alignment}`}>
                <div className={`project-heading-wrapper-${ProjectProps.alignment}`}>
                    <RevealComp delay={'200ms'} threshold={0.2} duration={'300ms'} x={-30} y={0}>
                        <div className={`project-heading-${ProjectProps.alignment}`}>
                            <h1 className={'project-main-heading'}>{ProjectProps.title}</h1>
                            <h3 className={'project-main-subheading'}>{ProjectProps.subtitle}</h3>
                        </div>
                    </RevealComp>
                    <RevealComp delay={'600ms'} threshold={0.2} duration={'300ms'} x={-30} y={0}>
                        <p className={`project-text-${ProjectProps.alignment}`}>{ProjectProps.description}</p>
                    </RevealComp>
                    <RevealComp delay={'800ms'} threshold={0.2} duration={'300ms'} x={-30} y={0}>
                        <div className={`project-tech-wrapper-${ProjectProps.alignment}`}>
                            {ProjectProps.design && (
                                <p className={'project-tech-1'}>UI/UX Design</p>
                            )}
                            {ProjectProps.development && (
                                <p className={'project-tech-2'}>Development</p>
                            )}
                            {ProjectProps.seo && (
                                <p className={'project-tech-3'}>SEO</p>
                            )}
                            {ProjectProps.analytics && (
                                <p className={'project-tech-4'}>Analytics</p>
                            )}
                        </div>
                    </RevealComp>
                    <Link target="_blank" rel="noopener noreferrer" to={ProjectProps.link}>
                        <RevealComp delay={'1000ms'} threshold={0.2} duration={'300ms'} x={-30} y={0}>
                            <button className={"project-button"}>
                                View Details
                            </button>
                        </RevealComp>
                    </Link>
                </div>
                <div className={`linear-gradient-project-${ProjectProps.alignment}`}></div>
            </div>

            <img className={'project-image'} src={ProjectProps.image} alt={'project image'} />
        </div>
    );
}

export default Project;