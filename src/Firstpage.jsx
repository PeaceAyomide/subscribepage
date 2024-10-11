import React from 'react'
import invite2 from './invite.mp4'

const Firstpage = () => {
  return (
    <div className='flex flex-col pb-[10rem]'>
        <div className='flex justify-center items-center text-[2.5rem] font-bold mt-[8rem] text-[#F6B25F] IPad:text-[1.5rem] side-phone:text-[1.8rem] phone:text-[0.8rem] font-blacksword'>
        You Are Invited
        </div>
        <div>
        <video
          className="w-full max-w-[30rem] mx-auto mt-8 IPad:max-w-[30rem] side-phone:max-w-[20rem] phone:max-w-[15rem]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={invite2} type="video/mp4" />
        
        </video>
        </div>
        <div className='flex justify-center items-start flex-row side-phone:flex-col mt-[2rem] space-x-8 side-phone:space-x-0 side-phone:space-y-8 px-[16rem] IPad:px-[7rem] side-phone:px-[4rem] phone:px-[2rem]'>
            <div className='one flex-1 p-[3rem] side-phone:p-[1rem] self-start side-phone:text-center side-phone:w-full'>
            <p className='text-[2rem]  flex flex-wrap text-[#F6B25F] IPad:text-[1.2rem] side-phone:text-[1rem] phone:text-[0.8rem] side-phone:justify-center font-calibril'><span className='font-blacksword mr-[0.4rem]'>Launch</span> of GETMEDCO's VIP Concierge Clinic</p>
        
        <p className='text-[1.3rem] mt-2 IPad:text-[1rem] side-phone:text-[0.8rem] phone:text-[0.6rem] font-calibril'>
        You are cordially invited to the exclusive launch of GETMEDCO's state-of-the-art Concierge Clinic, where VIP-level healthcare meets cutting-edge innovation.
        </p>
        <div className='flex justify-center mt-6'>
          <a href="https://sfxkxgch21h.typeform.com/to/xgtoZ6CS" target="_blank" rel="noopener noreferrer">
            <button className='bg-[#F6B25F] font-bold text-black py-2 px-[3rem] IPad:px-[2rem] side-phone:px-[1rem] phone:px-[0.5rem] text-[1.5rem] IPad:text-[1rem] side-phone:text-[0.8rem] phone:text-[0.6rem] rounded-lg font-calibril hover:bg-[#e69a4d]'>
              RSVP
            </button>
          </a>
        </div>
        
        </div>

        <div className='two flex-1 p-[3rem] side-phone:p-[1rem] self-start side-phone:text-center side-phone:w-full'>
        <p className='text-[1.3rem]  IPad:text-[1rem] side-phone:text-[0.8rem] phone:text-[0.6rem] font-calibril'>
        <span className='font-blacksword text-[#F6B25F]'>Date:</span> Saturday, November 9, 2024 <br/>
        <span className='font-blacksword text-[#F6B25F]'>Time:</span> 11 am-2 pm
        </p>
        <p className='text-[1.3rem] mt-2 IPad:text-[1rem] side-phone:text-[0.8rem] phone:text-[0.6rem] font-calibril'>
        <span className='font-blacksword text-[#F6B25F]'>Address:</span> Block 8, Plot 6A Wumego Crescent off Admiralty Road, off Christ Avenue, Lekki Phase 1, Lagos
        <div className='flex justify-center items-center mt-[2rem] IPad:mt-[1rem] side-phone:mt-[1rem] phone:mt-[0.5rem]'>
          <iframe
            className='w-full max-w-[40rem] h-[20rem] border-0 rounded-lg shadow-lg IPad:max-w-[20rem] side-phone:max-w-[15rem] phone:max-w-[10rem] IPad:h-[15rem] side-phone:h-[10rem] phone:h-[5rem] '
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1234567890123!2d3.1234567890123!3d6.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf1234567890!2sBlock%208%2C%20Plot%206A%20Wumego%20Crescent%2C%20Lekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </p>
    </div>
    </div>
    
    </div>
  )
}

export default Firstpage