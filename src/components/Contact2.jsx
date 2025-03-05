import React, { useState } from 'react'
import { PiRocket } from "react-icons/pi";
import emailjs from '@emailjs/browser';

export const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await emailjs.send(
        'service_5eeju3x',
        'template_755ehj6',
        {
          to_name: 'Noah',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'nrmKkqgd22BDoFBh9'
      );

      if (result.status === 200) {
        setSubmitStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('Failed to send message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className='container xl:space-x-4 space-y-8 xl:w-[1150px] mx-auto'>
        {/* flex flex-col justify-end */}
                    <div

                        data-aos="fade-up"
                        className='grid gap-[40px] md:gap-[80px] grid-cols-1 md:grid-cols-2 bg-[#212121] w-auto text-left rounded-[28px] h-full p-[22px] md:p-[32px]  border-[5px] border-[#1A1A1A] my-[20px]'
                    >
                        <div className='max-w-[465px]'>
                            <div className='text-[32px] mb-7 text-[#03FFA3]'>
                                <PiRocket/>
                            </div>
                            <h3 className='text-[24px]/[32px] text-[#03FFA3]'>
                                Feel free to send our friendly team a message
                            </h3>
                            <p className='text-[14px] text-[#E6E6E6]'>Message us using our online chat system for quick and efficient support.</p>
                        </div>
                        <div className='max-w-full md:max-w-[490px] space-y-2'>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className='text-[12px]/[18px]'>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        className='mt-[8px] bg-white text-black p-3 text-[14px]/[1.2px]  rounded-[10px] w-full focus:outline-[#00bd78]'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className='text-[12px]/[18px]'>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className='mt-[8px] bg-white text-black p-3 text-[14px]/[1.2px]  rounded-[10px] w-full focus:outline-[#00bd78]'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className='text-[12px]/[18px]'>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter message"
                                        required
                                        rows="4"
                                        className='mt-[8px] bg-white text-black p-3 text-[14px]/[20px]  rounded-[10px] w-full h-[80px] focus:outline-[#00bd78]'
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className='bg-[#03FFA3] text-black font-semibold py-3 text-[14px]/[1.2px]  rounded-[10px] w-full h-[45px] cursor-pointer active:bg-[#00bd78]'
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </button>
                                {submitStatus && (
                                    <p className={`text-center ${submitStatus.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                                        {submitStatus}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                
    </div>
  )
}
