/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "./ui/text-reveal-card";


export const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3ksty6d', 'template_jokz6u8', form.current, 'i0XMDRMgmBlxVgQxJ')
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({
            from_name: '',
            from_email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col md:flex-row items-center ml-40 space-x-3 p-6 rounded-lg bg-gradient-to-r shadow-md w-full max-w-4xl">
    <div className="md:w-1/2 flex justify-center ml-14 gap-7 pt-10  mb-8 md:mb-0">
      <div className="mr-1 bg-black ">
      <TextRevealCard
        className='pt-20'
        text="Collaborate and conquer"
        revealText="Let's Connect Together."
      >
        <TextRevealCardTitle>
        Together, we code the future. 🚀
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        Building dreams, one line of code at a time. 💻
        </TextRevealCardDescription>
        <TextRevealCardDescription className='pt-3'>
        Code more, stress less – teamwork makes the dream work! 🛠️
        </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </div>
    <div className="md:w-1/2 flex flex-col items-center md:items-start">
      {successMessage && <p className="text-green-500 text-center  mb-4">{successMessage}</p>}
      <form ref={form} onSubmit={sendEmail} className="bg-black text-white p-6 ml-40 w-full">
  <h3 className="text-lg font-bold mb-4 text-white text-center">Contact Me</h3>
  
  <div className="mb-4">
    <label className="block text-sm font-medium text-white">Name</label>
    <input
      type="text"
      name="from_name"
      value={formData.from_name}
      onChange={handleChange}
      className="mt-1 p-2 w-full bg-black border-0 border-b-2 border-cyan-500  text-white rounded-none focus:outline-none focus:border-cyan-300"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-sm font-medium text-white">Email</label>
    <input
      type="email"
      name="from_email"
      value={formData.from_email}
      onChange={handleChange}
      className="mt-1 p-2 w-full bg-black border-0 border-b-2 border-cyan-500  text-white rounded-none focus:outline-none focus:border-cyan-300"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-sm font-medium text-white">Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="mt-1 p-2 w-full bg-black border-0 border-b-2 border-cyan-500 text-white rounded-none focus:outline-none focus:border-cyan-300"
    ></textarea>
  </div>
  
  <button type="submit" className="w-full bg-cyan-200 hover:bg-gray-500 text-black py-2 rounded-md">Send</button>
</form>

    </div>
  </div>
);
};


