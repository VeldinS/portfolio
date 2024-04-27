import './modal.css';
import {useEffect, useState} from "react";

function Modal({ onClose }:any) {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true);

        const timeout = setTimeout(() => {
            setShowModal(false);
            onClose();
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [onClose]);

    return (
        <div className={`modal ${showModal ? 'show' : ''}`}>
                <p className={"modal-text"}>Message sent!</p>
                <div className={"modal-line"}></div>
            </div>
    );
}

export default Modal;