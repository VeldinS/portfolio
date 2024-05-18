import './eduCard.css'

import {Link} from "react-router-dom";


interface eduCard{
    cardImg: any,
    cardName: string,
    cardField: string,
    startDate: string,
    endDate?: string,
    cardLink?: string,
    techImg1?: any,
    techImg2?: any,
    techImg3?: any,
    techImg4?: any,
    techImg5?: any,
    techImg6?: any
}

function EduCard(props:eduCard) {
    return (
        <div className={"edu-card"}>
            <div className={"education-info-wrapper"}>
                <div className={"education-image-wrapper"}>
                    <img className={"education-image"} src={props.cardImg} alt={props.cardName}/>
                </div>
                <div className={"education-info"}>
                    <h1 className={"education-heading"}>{props.cardName}</h1>
                    <p className={"education-field"}>{props.cardField}</p>
                    <div className={"education-date-wrapper"}>
                        <p className={"education-date"}>{props.startDate}</p>
                        {props.endDate && (
                            <div className={"circle"}></div>
                        )}
                        {props.endDate && (
                            <p className={"education-date"}>{props.endDate}</p>
                        )}
                    </div>
                    <div className={"edu-tech-wrapper"}>
                        {props.techImg1 && (
                            <img className={"edu-tech-img"} src={props.techImg1} alt={props.cardName}/>
                        )}
                        {props.techImg2 && (
                            <img className={"edu-tech-img"} src={props.techImg2} alt={props.cardName}/>
                        )}
                        {props.techImg3 && (
                            <img className={"edu-tech-img"} src={props.techImg3} alt={props.cardName}/>
                        )}
                        {props.techImg4 && (
                            <img className={"edu-tech-img"} src={props.techImg4} alt={props.cardName}/>
                        )}
                        {props.techImg5 && (
                            <img className={"edu-tech-img"} src={props.techImg5} alt={props.cardName}/>
                        )}
                        {props.techImg6 && (
                            <img className={"edu-tech-img"} src={props.techImg6} alt={props.cardName}/>
                        )}
                    </div>
                </div>
            </div>
            {props.cardLink && (
                <Link to={props.cardLink} className={"certificate-link"} target="_blank" rel="noopener noreferrer">View Certificate</Link>
            )}
        </div>
    );
}

export default EduCard;