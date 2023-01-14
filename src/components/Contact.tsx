import React, { FormEventHandler, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const {t} = useTranslation();
     const sendEmail:FormEventHandler = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uc8k97q', 'template_begi5n6', form.current! , '28FbbgeX52uctPMNf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div id='contact'>
    <h1 className='page-title my-5 ' data-aos="fade-up" data-aos-duration="1500">CONTACT</h1>
    <form ref={form} onSubmit={sendEmail} className="mb-5 d-flex flex-row justify-content-center ">
        <div className='col-lg-6 col-sm-12 mb-5'>
        <div className='my-2'>
         <input type="text" className='form-control bg-ts border-0' placeholder={t('Your name').toString()} name="user_name" />
            
        </div>
        <input type="email" placeholder={t('Your email').toString()} name="user_email" className='border-0 my-2 form-control bg-ts'  />
        <textarea name="message" rows={5} placeholder={t('Your message').toString()} className='border-0 my-2 form-control bg-ts' />
        <input type="submit" className='btn bg-violet form-control text-light' value={t('Send').toString()} />

        </div>
    </form>
    </div>
  )
}

export default Contact