import './techCard.css'
import RevealComp from "../Animations/reveal.tsx";


interface cardData{
    cardName: string,
    tech1: string,
    tech1Img: any
    tech2?: string,
    tech2Img?: any
    tech3?: string,
    tech3Img?: any
    tech4?: string,
    tech4Img?: any
    tech5?: string,
    tech5Img?: any
}

function TechCard(props:cardData) {
    return (
        <div className={"gradient-wrapper"}>
            <div className={"tech-card"}>
                <RevealComp delay={'200ms'} threshold={0.5} duration={'300ms'} x={0} y={20}>
                    <h1 className={"tech-card-name"}>{props.cardName}</h1>
                </RevealComp>
                <div className={"tech-cards-wrapper"}>
                    <RevealComp delay={'400ms'} threshold={0.1} duration={'300ms'} x={0} y={20}>
                        <div className={"tech-card-technology-wrapper"}>
                            <div className={"technology-img-wrapper"}>
                                <img className={"technology-img"} src={props.tech1Img} alt={props.tech1}/>
                            </div>
                            <h1 className={"tech-card-name"}>{props.tech1}</h1>
                        </div>
                    </RevealComp>
                    {props.tech2 && (
                        <RevealComp delay={'600ms'} threshold={0.1} duration={'300ms'} x={0} y={20}>
                            <div className={"tech-card-technology-wrapper"}>
                                <div className={"technology-img-wrapper"}>
                                    <img className={"technology-img"} src={props.tech2Img} alt={props.tech2}/>
                                </div>
                                <h1 className={"tech-card-name"}>{props.tech2}</h1>
                            </div>
                        </RevealComp>
                    )}
                    {props.tech3 && (
                        <RevealComp delay={'800ms'} threshold={0.1} duration={'300ms'} x={0} y={20}>
                            <div className={"tech-card-technology-wrapper"}>
                                <div className={"technology-img-wrapper"}>
                                    <img className={"technology-img"} src={props.tech3Img} alt={props.tech3}/>
                                </div>
                                <h1 className={"tech-card-name"}>{props.tech3}</h1>
                            </div>
                        </RevealComp>
                    )}
                    {props.tech4 && (
                        <RevealComp delay={'1000ms'} threshold={0.1} duration={'300ms'} x={0} y={20}>
                            <div className={"tech-card-technology-wrapper"}>
                                <div className={"technology-img-wrapper"}>
                                    <img className={"technology-img"} src={props.tech4Img} alt={props.tech4}/>
                                </div>
                                <h1 className={"tech-card-name"}>{props.tech4}</h1>
                            </div>
                        </RevealComp>
                    )}
                    {props.tech5 && (
                        <RevealComp delay={'1200ms'} threshold={0.1} duration={'300ms'} x={0} y={20}>
                            <div className={"tech-card-technology-wrapper"}>
                                <div className={"technology-img-wrapper"}>
                                    <img className={"technology-img"} src={props.tech5Img} alt={props.tech5}/>
                                </div>
                                <h1 className={"tech-card-name"}>{props.tech5}</h1>
                            </div>
                        </RevealComp>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TechCard;