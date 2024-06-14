import './contactForm.css'

import {SetStateAction, useState} from "react";
import Modal from "../Modal/Modal.tsx";


function ContactForm() {

    async function sendDataToEmailService(formData: { name: string; email: string; message: string; }) {
        console.log("Form data:", formData);
        // @ts-ignore
        await emailjs.sendForm('service_ojxi04q', 'template_xn26i2f', '#email-form')
            .then(function (response: { status: string; text: string; }) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error: string) {
                console.log('FAILED...', error);
            });
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMessage(event.target.value);
    };

    async function handleFormSubmit(event: any) {
        event.preventDefault();

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        try {
            await sendDataToEmailService(formData);
            console.log('FORM SUBMITTED');
            setShowSuccessModal(true);

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    const handleCloseModal = () => {
        setTimeout(() => {
            setShowSuccessModal(false);
        }, 300);

    };


    return (
        <div className={"form-wrapper"}>
            <h1 className={"form-heading"}>Let's start from here</h1>
            <div className="form-container">
                <form onSubmit={handleFormSubmit} id={'email-form'} name={'email-form'} data-name="Email Form" method="get" className="editor">
                    <div className="line">
                        <span className="line-number">1</span>
                        <span className="code clr-1">function </span>
                        <span className="code clr-2"> submitForm</span>
                        <span className="code">(</span>
                        <span className="code clr-3">name:</span>
                        <span className="code clr-4">string,</span>
                        <span className="code clr-3">email:</span>
                        <span className="code clr-4">string,</span>
                        <span className="code clr-3">message:</span>
                        <span className="code clr-4">string</span>
                        <span className="code">)</span>
                        {'{'}
                    </div>
                    <div className="line"><span className="line-number">2</span><span
                        className="code ind">    const name = <input name={'name'} id={'name'} type="text" value={name}
                                                                     onChange={handleNameChange}
                                                                     placeholder="enter your name here"/>;</span></div>
                    <div className="line"><span className="line-number">3</span><span
                        className="code ind">    const email = <input name={'email'} id={'email'} type="email" value={email}
                                                                      onChange={handleEmailChange}
                                                                      placeholder="enter your email here"/>;</span>
                    </div>
                    <div className="line"><span className="line-number">4</span><span className="code ind">    const message = <input
                        name={'message'} id={'message'} value={message} onChange={handleMessageChange}
                        placeholder="enter your message here"></input>;</span></div>
                    <div className="line"><span className="line-number">5</span>
                    </div>
                    <div className="line"><span className="line-number">6</span><span className="code ind">    //Handle form submit</span>
                    </div>
                    <div className="line">
                        <span className="line-number">7</span>
                        <span className="code clr-1 ind">await</span>
                        <span className="code clr-2"> sendDataToService</span>
                        <span className="code">(</span>
                        <span className="code clr-3">name,</span>
                        <span className="code clr-3">email,</span>
                        <span className="code clr-3">message</span>
                        <span className="code">)</span>
                    </div>
                    <div className="line"><span className="line-number">8</span><span className="code">{'}'}</span>
                    </div>
                    <button type={'submit'} >Submit</button>
                </form>
            </div>
            {showSuccessModal &&
                <Modal onClose={handleCloseModal}/>
            }
        </div>
    );
}


export default ContactForm;