import './Contact.css';
import './fonts.css';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import email from '../icons/mail.png';
import phone from '../icons/smartphone-call.png';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, like sending the data to a backend or email service
        console.log('Form submitted:', formData);
        alert('Your message has been sent!');
        // Use EmailJS to send the form data as an email

        emailjs.send(
            process.env.REACT_APP_SERVICE_ID, 
            process.env.REACT_APP_TEMPLATE_ID, 
            formData, process.env.REACT_APP_PUBLIC_KEY
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent!');
            }, (error) => {
                console.log('FAILED...', error);
                console.log(process.env.REACT_APP_SERVICE_ID);
                alert('Failed to send the message. Please try again later.');
            })
    };
    return (
      <div className="Contact" data-section="contact">
        <div id="contact-desc" className='contact-section Playfair-font'>
            <span className="heading-meta">Get in Touch</span>
            <h2 className="colorlib-heading">Contact</h2>
        </div>
        <div id="contact">
            <div id="contact-row">
                <div className='Quicksand-font contact-info email-contact'>
                    <img className="contact-type" src={email} alt='email'/>
                    <p>nactiabond.ota@gmail.com</p>
                </div>
                <div className='Quicksand-font contact-info phone-contact'>
                    <img className="contact-type" src={phone} alt='phone'/>
                    <p>(+1) 514-513-7450</p>
                </div>
            </div>
            <div id="message-row">
                <h2 className="Quicksand-font">Direct Message:</h2>
                <form id="email-form" onSubmit={handleSubmit}>
                    <div className='inputs-row'>
                        <input
                            className='input-field'
                            type="text"
                            name="name"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='input-field'
                            type="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='inputs-row'>
                        <input
                            className='input-field'
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleChange}
                        />
                        <input
                            className='input-field'
                            type="text"
                            name="subject"
                            placeholder="Subject*"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <textarea
                        className='input-field'
                        name="message"
                        placeholder="Message*"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button className="Quicksand-font" type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </div>)
}

export default Contact;
                