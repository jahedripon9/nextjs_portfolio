import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("");
        const formData = new FormData(event.target);
        formData.append("access_key", "07479318-09b8-472a-86bb-24bec82782a7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] relative'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Connect With me</h4>
            <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type='text' placeholder='Enter your name' required name='name' />
                    <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type='email' placeholder='Enter your email' required name='email' />
                </div>
                <textarea className='w-full p-4 outline-none border-gray-400 border-[0.5px] rounded-md bg-white mb-6' rows='6' placeholder='Enter your message' required name='message' ></textarea>
                <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type='submit'>
                    Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </button>
                <p className='mt-4'>{result}</p>
            </form>

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white px-8 py-6 rounded-lg shadow-lg text-center animate-popup">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">✅ Success!</h3>
                        <p className="text-gray-800">Form submitted successfully!</p>
                    </div>
                </div>
            )}

            {/* Popup animation styles */}
            <style jsx>{`
                .animate-popup {
                    animation: fadeInScale 0.4s ease-out;
                }

                @keyframes fadeInScale {
                    0% {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
