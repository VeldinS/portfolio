import './contactForm.css'

function ContactForm() {
    return (
        <div className={"form-wrapper"}>
            <h1 className={"form-heading"}>Let's start from here</h1>
            <form className={"form"}>
                <input className={"form-input"} placeholder={"Name"} name={"name"} id={"name"}/>
                <input className={"form-input"} placeholder={"E-mail"} name={"email"} id={"email"}/>
                <textarea className={"form-textarea"} placeholder={"Your message"} name={"message"} id={"message"}/>

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