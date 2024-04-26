import './contactForm.css'

import {SetStateAction, useState} from "react";


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

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            setName('');
            setEmail('');
            setMessage('');
        }catch (error) {
            console.error('Error sending data:', error);
        }

    }


    return (
        <div className={"form-wrapper"}>
            <h1 className={"form-heading"}>Let's start from here</h1>
            <form id="email-form" name="email-form" data-name="Email Form" method="get"  className={"form"} onSubmit={handleFormSubmit}>
                <input onChange={handleNameChange} className={"form-input"} placeholder={'Name'} name={"name"} id={"name"} value={name}/>
                <input onChange={handleEmailChange} className={"form-input"} placeholder={'Email'} name={"email"} id={"email"} value={email}/>
                <textarea  onChange={handleMessageChange} className={"form-textarea"} placeholder={'Message'} name={"message"} id={"message"} value={message}/>

                <button className={"form-button"} type={"submit"}>
                    <p>Send!</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                    </svg>
                </button>
            </form>
        </div>
    );
}



export default ContactForm;