import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12  max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
            <div className='mt-24 '>
                <Image src={assets.profile_img} alt='' className=" rounded-full w-32" />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi I'm William Mark <Image src={assets.hand_icon} alt='' className=" w-6" /></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>frontend web developer based in London.</h1>
            <p className='max-w-2xl max-auto font-ovo'>
                I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border rounded-full border-black flex items-center gap-2'>Contact me <Image src={assets.right_arrow} alt='' className=" w-6" /></a>
                <a href="/Jahed_Ahmed_Ripon.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume <Image src={assets.download_icon} alt='' className=" w-6" /></a>
            </div>
        </div>
    )
}

export default Header