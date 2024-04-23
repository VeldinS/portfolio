import './contactForm.css'

function ContactForm() {
    return (
        <div className={"form-wrapper"}>
            <h1 className={"form-heading"}>Let's start from here</h1>
            <form className={"form"}>
                <input className={"form-input"} placeholder={"Name"} name={"name"} id={"name"}/>
                <input className={"form-input"} placeholder={"E-mail"} name={"email"} id={"email"}/>
                <textarea className={"form-textarea"} placeholder={"Your message"} name={"message"} id={"message"}/>
            </form>
        </div>
    );
}

export default ContactForm;