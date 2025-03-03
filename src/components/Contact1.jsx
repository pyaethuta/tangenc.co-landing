import React from 'react';
import { LuMessagesSquare } from "react-icons/lu";
import { MdPhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const Contact1 = () => {
    const contacts = [
        {
            icon: <LuMessagesSquare />,
            title: "Message Us",
            description: "Message us using our social media channels for quick and efficient support.",
            info: <a className='cursor-pointer text-[#03FFA3] hover:underline-offset-2 hover:underline' href='#'>info@tangenc.co</a>
        },
        {
            icon: <MdPhoneInTalk />,
            title: "Call Us",
            description: "Let's have a call – there's nothing quite like talking to another person.",
            info: <a className='cursor-pointer text-[#03FFA3] hover:underline-offset-2 hover:underline' href='#'>+959-796-029-282</a>
        },
        {
            icon: <IoLocationOutline />,
            title: "Address",
            description: "We'd be delighted to meet you in person for an ice break.",
            info: <p className='text-[#03FFA3]'>Yangon, Myanmar</p>
        }
    ];

    return (
        <div className='container mx-auto mt-[45px]'>
            <div className='text-center mx-auto mb-[65px]' data-aos="fade-up">
                <h1 className='h1 mb-[10px] font-semibold text-[#03FFA3]'>Get in touch with us today!</h1>
                <p className='p max-w-[550px] mx-auto'>
                    Contact our sales and support teams for demos, onboarding assistance, or any product inquiries.
                </p>
            </div>


            <div className='container grid gap-[10px] grid-cols-1 md:grid-cols-3 xl:space-x-4 space-y-8 xl:w-[1150px] mx-auto items-stretch'>
                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        className='bg-[#212121] w-auto text-left rounded-[28px] flex flex-col h-full min-h-[240px] p-[22px] md:p-[32px] border border-[5px] border-[#1A1A1A]'
                    >
                        <div className='flex-grow'>
                            <div className='text-[32px] mb-7 text-[#03FFA3]'>
                                {contact.icon}
                            </div>
                            <h3 className='text-[18px] text-[#03FFA3]'>
                                {contact.title}
                            </h3>
                            <p className='text-[14px]'>{contact.description}</p>
                        </div>
                        <div>{contact.info}</div>
                </div>
                ))}
            </div>


        </div>
    );
};
