import './linear-line.css';
import RevealComp from "../Animations/reveal.tsx";

function LinearLine() {
    return (
        <RevealComp delay={'200ms'} threshold={0.5} duration={'300ms'} x={0} y={0}>
            <div className={'linear-line'}></div>
        </RevealComp>
    );
}

export default LinearLine;