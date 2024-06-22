import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (!name.trim()) {
      errorsCopy.name = 'Name is required';
      valid = false;
    } else {
      errorsCopy.name = '';
    }

    if (!email.trim()) {
      errorsCopy.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsCopy.email = 'Email is invalid';
      valid = false;
    } else {
      errorsCopy.email = '';
    }

    if (!message.trim()) {
      errorsCopy.message = 'Message is required';
      valid = false;
    } else {
      errorsCopy.message = '';
    }

    setErrors(errorsCopy);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you can handle form submission, e.g., send data to backend
      console.log('Form submitted:', { name, email, message });
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      alert('Form submitted successfully!');
    }
  };

  return (
    
    <div className='container'>
     
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <h1>Contact Us</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="input-container">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
