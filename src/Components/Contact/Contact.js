import React, { useRef, useState } from 'react'
import './Contact.scss'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const [load, setLoad] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_31xtecj', 'template_fzz1nkw', form.current, 'Ojv9H0PMxv728xQDQ')
            .then((result) => {
                console.log(result.text);
                setLoad(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-container'>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <div className='form-left'>
                    <h1 className='head1'>Connect with me:</h1>
                </div>
                <div className='form-right'>
                    <span>
                        <input type='text' name='user_name' className='form-inp' placeholder='Name' />
                    </span>
                    <span>
                        <input type='email' name='user-email' className='form-inp' placeholder='Email' />
                    </span>
                    <span>
                        <input type='text' name='message' className='form-inp' placeholder='Your Message' />
                    </span>
                    <button type='submit' className='form-sub' value='Send'> Submit</button>
                </div>
            </form>
            {load ? alert('Your message has been sent to the user') : ''}
        </div >
    )
}

export default Contact
