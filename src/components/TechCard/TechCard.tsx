import './techCard.css'

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
                <h1 className={"tech-card-name"}>{props.cardName}</h1>
                <div className={"tech-cards-wrapper"}>
                    <div className={"tech-card-technology-wrapper"}>
                        <div className={"technology-img-wrapper"}>
                            <img className={"technology-img"} src={props.tech1Img} alt={props.tech1}/>
                        </div>
                        <h1 className={"tech-card-name"}>{props.tech1}</h1>
                    </div>
                    {props.tech2 && (
                        <div className={"tech-card-technology-wrapper"}>
                            <div className={"technology-img-wrapper"}>
                                <img className={"technology-img"} src={props.tech2Img} alt={props.tech2}/>
                            </div>
                            <h1 className={"tech-card-name"}>{props.tech2}</h1>
                        </div>
                    )}
                    {props.tech3 && (
                        <div className={"tech-card-technology-wrapper"}>
                            <div className={"technology-img-wrapper"}>
                                <img className={"technology-img"} src={props.tech3Img} alt={props.tech3}/>
                            </div>
                            <h1 className={"tech-card-name"}>{props.tech3}</h1>
                        </div>
                    )}
                    {props.tech4 && (
                        <div className={"tech-card-technology-wrapper"}>
                            <div className={"technology-img-wrapper"}>
                                <img className={"technology-img"} src={props.tech4Img} alt={props.tech4}/>
                            </div>
                            <h1 className={"tech-card-name"}>{props.tech4}</h1>
                        </div>
                    )}
                    {props.tech5 && (
                        <div className={"tech-card-technology-wrapper"}>
                            <div className={"technology-img-wrapper"}>
                                <img className={"technology-img"} src={props.tech5Img} alt={props.tech5}/>
                            </div>
                            <h1 className={"tech-card-name"}>{props.tech5}</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TechCard;