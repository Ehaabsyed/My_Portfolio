import gsap from "gsap";
import React, { useEffect } from "react";

function Start() {
  // Scroll smoothly to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70; // navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:840px)", () => {
      gsap.from(".text1", {
        duration: 1,
        delay: 1,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.3, // smaller stagger for smooth effect
      });
      gsap.from(".text2", {
        x: -600,
        duration: 1.5,
        opacity: 0,
        delay: 0.7,
        ease: "power3.out",
        stagger: 0.3,
      });
      gsap.from(".text3", {
        x: 600,
        duration: 1.5,
        opacity: 0,
        delay: 0.7,
        ease: "power3.out",
        stagger: 0.3,
      });
      gsap.from(".text4", {
        y: 600,
        rotateY: 280,
        duration: 1.5,
        opacity: 0,
        delay: 1.4,
        ease: "power3.out",
        stagger: 0.3,
      });
    });
    mm.add("(max-width: 839px)", () => {
  gsap.from(".text1", {
    duration: 1,
    delay: 1,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.3,
  });
  gsap.from(".text2", {
    x: -600,
    duration: 1.5,
    opacity: 0,
    delay: 0.7,
    ease: "power3.out",
    stagger: 0.3,
  });
  gsap.from(".text3", {
    x: 600,
    duration: 1.5,
    opacity: 0,
    delay: 0.7,
    ease: "power3.out",
    stagger: 0.3,
  });
  gsap.from(".text4", {
    y: 600,
    rotateY: 280,
    duration: 1.5,
    opacity: 0,
    delay: 1.4,
    ease: "power3.out",
    stagger: 0.3,
  });
});


    return () => mm.revert(); // cleanup on unmount
  }, []);

  return (
    <div id="start" className='h-screen start w-full bg-[#1a1527] text-white  p-10'>
      <img src="/bg-port.webp" className="h-full w-full absolute top-0 left-0" alt="" />
      <div className="text h-60 w-fit pl-2 pr-2 gap-6 absolute top-50 left-7 md:top-58 md:left-80 flex flex-col">
        <p className="md:text-xl text-gray-500 text1 font-light">Start/&gt;</p>
        <h1 className="md:text-5xl text-2xl font-bold text2">Hi, my name is <span className="text-[#5918DF] name">Ehaab Syed</span></h1>
        <h1 className="md:text-5xl text-2xl font-bold text3">i design and develop Fullstack Websites</h1>
        <p className="md:text-2xl text-xl text-gray-500 font-normal text4">Let me show You...</p>
      </div>

      <div className="line w-[1px] md:left-70 top-110 left-7 md:top-60 md:h-[488.3%] h-[515%] absolute bg-[#5918DF] z-10">
        <div className="bullet w-2 h-2 rounded-full left-[-3px]  absolute border-2 border-[#5918DF] md:top-0 md:right-[-3.5px] z-20 bg-[#1a1527]"></div>

        <div className="md:flex  gap-4 hidden">
          <svg onClick={() => scrollToSection("projects")} version="1.1" className="h-7 bg-transparent w-7 absolute z-50 top-60  right-[-13px] " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 30" xmlSpace="preserve"><path fill="#988E9F" d="M9,30c-5,0-9-4.2-9-9.4V9.4C0,4.2,4,0,9,0s9,4.2,9,9.4v11.3C18,25.8,14,30,9,30z M16.2,9.4
	c0-4.2-3.2-7.5-7.2-7.5S1.8,5.3,1.8,9.4v11.3c0,4.1,3.2,7.5,7.2,7.5s7.2-3.4,7.2-7.5V9.4z M9.2,12.8c-0.5,0-0.9-0.4-0.9-0.9V7.1
	c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9v4.7C10.1,12.3,9.7,12.8,9.2,12.8z" className="st0"></path></svg>
          <h3 className="scroll absolute top-63 left-[-14px] h-fit w-fit rounded-full tracking-normal z-40 bg-[#1a152765]">scroll</h3>
        </div>
      </div>
      <div className="scrolls text-[#5918DF] text-xl font-bold md:hidden  top-170 absolute left-[50%] -translate-x-[50%] flex flex-col justify-center items-center gap-3">
        SCROLL
        <svg onClick={() => scrollToSection("projects")} version="1.1" className="h-7 bg-transparent w-7 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 30" xmlSpace="preserve"><path fill="#988E9F" d="M9,30c-5,0-9-4.2-9-9.4V9.4C0,4.2,4,0,9,0s9,4.2,9,9.4v11.3C18,25.8,14,30,9,30z M16.2,9.4
	c0-4.2-3.2-7.5-7.2-7.5S1.8,5.3,1.8,9.4v11.3c0,4.1,3.2,7.5,7.2,7.5s7.2-3.4,7.2-7.5V9.4z M9.2,12.8c-0.5,0-0.9-0.4-0.9-0.9V7.1
	c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9v4.7C10.1,12.3,9.7,12.8,9.2,12.8z" className="st0"></path></svg>
      </div>
    </div>
  )
}

export default Start;
