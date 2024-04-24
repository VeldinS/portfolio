import './homeInfo.css'

import Typewriter from 'typewriter-effect';
import {Link} from "react-router-dom";

function HomeInfo() {

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
        <div className={"landing-info-wrapper"}>

            <h1 className={"name-heading-1"}>
                <Typewriter
                    options={{
                        strings: ['Hi I’m Veldin', 'Full-stack & no-code', 'Developer'],
                        autoStart: true,
                        loop: true
                    }}
                />
            </h1>
            <p className={"landing-info"}>During these
                <span className={"landing-info-span"}> 2 years </span>
                as
                <span className={"landing-info-span"}> Full-stack Software Engineer. </span>
                my role
                has extended beyond coding to effective communication with various departments, to
                define new features and spearheading the development of new applications.</p>
            <div className={"landing-info-buttons"}>
                <button onClick={handleDownload} className={"cv-button"}>
                    Download CV
                </button>
                <Link to={'/experience'}>
                    <button className={"button-1"}>
                        See experience
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HomeInfo;