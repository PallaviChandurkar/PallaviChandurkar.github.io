import React from 'react';
// import {MdOutlineMailOutline} from 'react-icons/md';
import './contact.css';
// import { useRef } from 'react';
// import emailjs from 'emailjs-com';
import {BsTelephoneFill} from 'react-icons/bs';
import {IoMdMail} from 'react-icons/io';

const Contact = () => {
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_ycoawtd', 'template_26vicmd', form.current, 'YOUR_USER_ID')
        
    //   };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">

                {/* <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMailOutline className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>123pallavichandurkar@gmail.com</h5>
                        <a href="mailto:123pallavichandurkar@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <MdOutlineMailOutline/>
                        <h4>WhatsApp</h4>
                        <h5>+919404269174</h5>
                        <a href="mailto:123pallavichandurkar@gmail.com">Send a message</a>
                    </article>
                </div> */}
                {/* END OF CONTACT OPTIONS */}
                {/* <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form> */}
                <div className="contact__box">
                <p>Seeking a software engineering position that makes positive impact in environment by building tools and providing services with problem solving and result oriented attitude.</p>
                </div>
                <div className="contact__details">
                <h5><BsTelephoneFill className="icon"/>(+91) 9404269174</h5><br/>
                <h5><IoMdMail className="icon"/>123pallavichandurkar@gmail.com</h5>
                </div>
            </div>
        </section>
    )
}

export default Contact
