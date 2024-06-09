import './project.css';

function Project({}) {
    return (
        <div className={'project-wrapper'}>
            <div className={'project-heading-wrapper'}>
                <div className={'project-heading'}>
                    <h1 className={'project-main-heading'}>Project Name</h1>
                    <h3 className={'project-main-subheading'}>Project Subtitle</h3>
                </div>
                <p className={'project-text'}>Some project text.Some project text.Some project text.Some project text.</p>
            </div>
            <div className={'project-content-wrapper'}>
                <div className={'project-background'}>
                </div>
                <div className={'project-desktop'}>
                    <img/>
                    <div className={'project-desktop-info'}>
                        <img className={'project-icon'}/>
                        <p className={'project-desktop-name'}>Project Name</p>
                    </div>
                </div>
                <div className={'project-mobile-image'}>

                </div>
            </div>
        </div>
    );
}

export default Project;