import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, scale } from "motion/react"

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
        <motion.div

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}

            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] relative dark:bg-none'>
            <motion.h4

                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}

                className='text-center mb-2 text-lg font-ovo'>Connect With me</motion.h4>
            <motion.h2

                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}

                className='text-center text-5xl font-ovo'>Get in touch</motion.h2>
            <motion.p

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}

                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </motion.p>

            <motion.form

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}

                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <motion.input

                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}

                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' type='text' placeholder='Enter your name' required name='name' />

                    <motion.input

                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}

                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90' type='email' placeholder='Enter your email' required name='email' />
                </div>
                <motion.textarea

                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}

                    className='w-full p-4 outline-none border-gray-400 border-[0.5px] rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' rows='6' placeholder='Enter your message' required name='message' ></motion.textarea>
                <motion.button

                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}

                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' type='submit'>
                    Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.button>
                <p className='mt-4'>{result}</p>
            </motion.form>

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
        </motion.div>
    );
};

export default Contact;
