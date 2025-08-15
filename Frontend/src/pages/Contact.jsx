import axios from 'axios';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()
  const onSubmit = async (data) => {
    //timer of 2s
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data);

    axios.post('http://localhost:3000/send', { data }, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          toast.success("Message sent successfully")
          reset()
          handleClose()
        } else {
          toast.error("Error sending message")
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    if (isOpen) {
      const mm = gsap.matchMedia();

      mm.add("(min-width:840px)", () => {
        gsap.from(".modal", {
          y: -900,
          duration: 0.8,
          ease: "power3.out"
        });

      });

      mm.add("(max-width: 839px)", () => {
        gsap.from(".modal", {
          opacity: 0,
          duration: 0.5
        });
      });

      return () => mm.revert();
    }
  }, [isOpen]);




  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div id='contact' className='min-h-[100vh] relative w-full bg-[#0E0D10] pt-45'>
      <h2 className='absolute left-10 top-8 md:top-8 text-gray-400 font-light text-xl md:left-82'>Contact/&gt;</h2>
      <div className="bullet w-2 h-2 rounded-full md:left-69 left-[25px] top-11  absolute border-2 border-[#5918DF] md:top-11 md:right-[-3.5px] z-20 bg-[#1a1527]"></div>

      {/* Contact Details */}
      <div className="details absolute  right-20 md:right-35 h-70 w-2/3">
        <h2 className='text-white font-semibold tracking-tight text-[30px] md:text-3xl'>Find me on:</h2>
        <div className="links flex md:flex-row flex-col md:gap-30 gap-5 font-medium md:text-xl text-[15px] mt-2 text-[#5918DF]">
          <ul className='flex flex-col left'>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/Ehaabsyed' className='flex cursor-none gap-3 items-center'><FaGithub /> <span>github.com/Ehaabsyed</span></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/syed-ehaab-8b8a49308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='flex cursor-none gap-3 items-center'><FaLinkedin /> <span>LinkedIn</span></a>
            <a target="_blank" rel="noopener noreferrer" href='https://x.com/ehbsyd12?t=uxz8OdR1SgOobwtrvXsblg&s=09' className='flex cursor-none gap-3 items-center'><FaXTwitter /> <span>@ehbsyd12</span></a>
          </ul>
          <ul className='flex flex-col right'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/_ehaab_syedd?igsh=MWNmeDhvbzN1YXg1Zw==' className='flex cursor-none gap-3 items-center'><FaInstagram /> <span>@_ehaab_syedd</span></a>
            <a target="_blank" rel="noopener noreferrer" href='mailto:syedehaab12@gmail.com?subject=Hello%20Ehaab&body=I%20wanted%20to%20reach%20out%20to%20you.' className='flex cursor-none gap-3 items-center'><MdEmail /> <span>syedehaab12@gmail.com</span></a>
            <a target="_blank" rel="noopener noreferrer" href='tel:8217201069' className='flex cursor-none gap-3 items-center'><FaPhoneAlt /> <span>+91 8217201069</span></a>
          </ul>
        </div>
      </div>

      {/* Get in Touch Button */}
      <div className="contact-but cursor-none absolute top-120 left-11 md:left-77 md:top-100">
        <button
          onClick={handleOpen}
          className='font-bold border-none but cursor-none text-[22px] rounded-full px-6 py-2 md:px-8 md:py-3 bg-[#5918DF] text-white'
        >
          Get in Touch
        </button>
      </div>

      {/* Footer */}
      <div className="contact-last absolute left-11 md:left-77 bottom-0 md:top-155">
        <p className='text-gray-500'>Made with {"</>"} by Ehaabsyed - 2025</p>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed cursor-none  inset-0 bg-black/90 flex justify-center items-center z-30">
          <div className="bg-[#0E0D10] form modal p-8 rounded-2xl w-[90%] md:w-[400px] shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute cursor-none top-3 right-3 text-gray-500 cursor- hover:text-black text-xl"
            >
              ✖
            </button>
            <h2 className="text-2xl font-semibold  text-center mb-4 text-[#5918DF]">Contact Me</h2>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col gap-4">
              <input
                onChange={(e) => setname(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="border cursor-none border-white text-white p-2 rounded-md focus:border-0 outline-none focus:ring-2 focus:ring-[#5918DF]"
                required
                {...register("name", {
                  required: "Email is required",
                  minLength: { value: 3, message: "Min 3 letters required" }
                })}
              />
              <input
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="Your Email"
                className="border cursor-none border-white text-white p-2 rounded-md focus:border-0 outline-none focus:ring-2 focus:ring-[#5918DF]"
                required
                {...register("email", {
                  required: "Email is required",
                  minLength: { value: 3, message: "Min 3 letters required" }
                })}
              />
              <textarea
                onChange={(e) => setmessage(e.target.value)}
                placeholder="Your Message"
                rows="4"
                className="border cursor-none border-white text-white p-2 rounded-md focus:border-0 outline-none focus:ring-2 focus:ring-[#5918DF]"
                required
                {...register("message", {
                  required: "Email is required",
                  minLength: { value: 3, message: "Min 3 letters required" }
                })}
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}

                className="bg-[#5918DF] cursor-none font-bold text-white py-2 px-4 rounded-full hover:bg-[#4a14c9] transition-all"
              >
                {isSubmitting ? "Sending" : "Send"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
