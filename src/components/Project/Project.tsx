import './project.css';
import {Link} from "react-router-dom";

interface ProjectProps {
    alignment: string,
    title: string,
    subtitle: string,
    description: string,
    link: string,
    image: any
}

function Project(ProjectProps: ProjectProps): JSX.Element {
    return (
        <div className={`project-wrapper-${ProjectProps.alignment}`}>
            <div className={`project-heading-wrapper-${ProjectProps.alignment}`}>
                <div className={`project-heading-${ProjectProps.alignment}`}>
                    <h1 className={'project-main-heading'}>{ProjectProps.title}</h1>
                    <h3 className={'project-main-subheading'}>{ProjectProps.subtitle}</h3>
                </div>
                <p className={`project-text-${ProjectProps.alignment}`}>{ProjectProps.description}</p>
                <Link target="_blank" rel="noopener noreferrer" to={ProjectProps.link}>
                    <button className={"cv-button"}>
                        Check it out...
                    </button>
                </Link>
                <div className={`linear-gradient-project-${ProjectProps.alignment}`}></div>
            </div>
            <img className={'project-image'} src={ProjectProps.image} alt={'project image'} />
        </div>
    );
}

export default Project;