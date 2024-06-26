import './expCard.css'
import '../EducationCard/eduCard.css'
import RevealComp from '../Animations/reveal';


interface expCard{
    cardName: string,
    cardEmploymentType: string,
    startDate: string,
    endDate?: string,
    location: string,
    company: string,
    paragraph1: string,
    paragraph2: string
}

function ExpCard(props:expCard) {
    return (
        <RevealComp delay={'200ms'} threshold={0.5} duration={'300ms'} x={-30} y={0}>
            <div className={"experience-card"}>
                <div className={"education-info experience-info"}>
                    <h1 className={"education-heading"}>{props.cardName}</h1>
                    <p className={"education-field"}>{props.cardEmploymentType}</p>
                    <div className={"education-date-wrapper"}>
                        <p className={"education-date"}>{props.startDate}</p>
                        {props.endDate && (
                            <div className={"circle"}></div>
                        )}
                        {props.endDate && (
                            <p className={"education-date"}>{props.endDate}</p>
                        )}
                    </div>
                    <p className={"education-date"}>{props.location}</p>
                </div>

                <div className={"experience-details"}>
                    <p className={"company-name"}>{props.company}</p>
                    <p className={"experience-paragraph"}>{props.paragraph1}</p>
                    <p className={"experience-paragraph"}>{props.paragraph2}</p>
                </div>
            </div>
        </RevealComp>
    );
}

export default ExpCard;