import React, {useRef} from 'react'
import './contact.css'
import LinkedIn from "../../assets/linkedin.png"
import Github from "../../assets/github.png"
import Whatsapp from "../../assets/whatsapp.png"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_figr9bz', 'template_is11mlm', form.current, 'aGDIMPittaVNreomt')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent !');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div id='contact'>
        <section className='contactPage'>
            <h1 className='contactPageTitle'> Contact Me</h1>
            <span className='contactDesc'> Please contact me if you have any queries about me.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='from_name'/><br/>
                <input type="email" className="email" placeholder="Your Email Address" email='from_email'/><br/>
                <textarea className="msg" name="message" rows="10" cols="30" placeholder="Your Message"></textarea><br/>
                <button type='submit' value={'send'} className='submitBtn'>Submit</button><br/>
                <div className='links'>
                    <a href='https://www.linkedin.com/in/agalya-n/' target='blank'><img src={LinkedIn} alt="LinkedIn" className='link'/></a>
                    <a href='https://github.com/agalya-it21'><img src={Github} alt="Github" className='link1'/> </a>
                    <a href='https://wa.me/919597142665'><img src={Whatsapp} alt="Whatsapp" className='link2'/> </a>
                      
                </div>
            </form>
        </section>
        </div>

  );
}

export default Contact; 