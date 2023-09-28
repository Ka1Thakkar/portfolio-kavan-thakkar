import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbBrandStackoverflow } from 'react-icons/tb'
import { Pacifico, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets:["latin"],
    weight:['400']
})

const _variants = {
  hover:{
      y:-5,
      transition:{delay:0, duration:0.1}
  },
}

const monoton = Pacifico({
  subsets:["latin"],
  weight:["400"]
})
function ContactForm() {
  const [state, handleSubmit] = useForm("myyaqagk");
  if (state.succeeded) {
      return (
        <div className='flex justify-center h-[60vh] pb-10'>
            <h1 className='text-4xl text-center font-light'>Thank you for the message. I'll get back to you as soon as possible.</h1>
        </div>
      );
  }
  return (
    <div
    className='flex justify-center pb-10 h-[60vh]'>
    <section className='md:w-6/12'>
      <form onSubmit={handleSubmit} className=''>
        {/* <div className="">
        <div className='pb-12 text-left'>
          <label className='text-5xl font-black text-orange-500'>{"I'M HERE TO MAKE YOUR EXPERIENCE BETTER AND MAKE INTERFACES THAT CAPTURE YOUR ATTENTION."}</label>
        </div>
        </div> */}
        {/* <div className='pb-2'>
          <label htmlFor="name" className='text-white text-3xl'>Full Name</label>
        </div> */}
        <div className="">
        <div className='pb-5'>
          <h1 className='md:text-2xl font-light'>Full Name</h1>
          <input type='text' name='Full Name' placeholder='' className='w-full h-10 px-5 rounded-full outline-none font-bold text-black bg-transparent border-2 border-black' />
        </div>
        {/* <div className='text-white pb-2 text-3xl'>
            <label htmlFor="email" className=''>Email Address</label>
        </div> */}
        <div className='pb-5'>
          <h1 className='md:text-2xl font-light'>Email ID</h1>
            <input
            id="email"
            type="email" 
            name="email"
            placeholder=''
            className='w-full h-10 bg-transparent border-2 border-black rounded-full outline-none font-bold text-black px-5'
            />
        </div>
        {/* <div className='pb-2'>
          <label htmlFor="subject" className='text-white text-3xl'>Subject</label>
        </div> */}
        <div className='pb-5'>
          <h1 className='md:text-2xl font-light'>Subject</h1>
          <input type='text' name='Subject' placeholder='' className=' rounded-full outline-none font-bold textblack w-full h-10 bg-transparent border-2 border-black px-5' />
        </div>
        <div>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
        </div>
        <div className='pb-5'>
          <h1 className='md:text-2xl font-light'>Message</h1>
            <textarea
            id="message"
            name="message"
            className='rounded-3xl h-32 w-full outline-none font-bold text-black bg-transparent border-2 border-black px-5'
            placeholder=''
            />
        </div>
        <div>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
        </div>
        <div
        className='flex justify-center font-bold'>
            <button type="submit" disabled={state.submitting} className='bg-textgreen rounded-xl px-5 py-2 border-black text-black transition-all ease-in-out border-4 outline-none font-black'>Submit</button>
        </div>
        </div>
    </form>
    </section>
    </div>
  );
}
function Form() {
  return (
    <ContactForm />
  );
}
export default Form;