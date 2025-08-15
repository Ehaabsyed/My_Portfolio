import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const tiltRefs = useRef([]); // array of refs for each card

  const mouseHover = (e, index) => {
    const element = tiltRefs.current[index];
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 8;
    const y = -(e.clientY - rect.top - rect.height / 2) / 4;

    gsap.to(element, {
      rotateX: y,
      rotateY: x,
      duration: 0.5,
      ease: "elastic.out(1,0.3)",
    });
  };

  const mouseLeave = (index) => {
    const element = tiltRefs.current[index];
    if (!element) return;

    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1,0.3)",
    });
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:840px)", () => {
      gsap.from(".left", {
        x: -1300,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3, // time between each card's animation
        scrollTrigger: {
          trigger: ".projects",
          scroller: "body",
          start: "top 210%",
          scrub: 2,
        },
      });
      gsap.from(".right", {
        x: 1300,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3, // time between each card's animation
        scrollTrigger: {
          trigger: ".projects",
          scroller: "body",
          start: "top 210%",
          scrub: 2,
        },
      });
    });

    mm.add("(max-width: 839px)", () => {
      gsap.from(".left", {
        x: -1500,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3, // time between each card's animation
        scrollTrigger: {
          trigger: ".projects",
          scroller: "body",
          start: "top 210%",
        },
      });
      gsap.from(".right", {
        x: 1500,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3, // time between each card's animation
        scrollTrigger: {
          trigger: ".projects",
          scroller: "body",
          start: "top 210%",
        },
      });
    });

    return () => mm.revert();
  }, []);

  const projectData = [
    {
      img: "/hospital.jpg",
      src: "https://hospital-management-system-nine-kohl.vercel.app/",
      title: "Hospital Management System",
      git: "https://github.com/Ehaabsyed/Hospital_Management_System",
      desc: "A full-stack Hospital Management Platform built with the MERN stack, featuring role-based access control for patients, doctors, and admins. Includes appointment booking, profile management with Cloudinary image uploads, JWT authentication with HTTP-only cookies, and email OTP verification. The responsive UI uses React and GSAP animations, with Node.js, Express, and MongoDB powering the backend, deployed via Vercel and Render.",
    },
    {
      img: "/url.png",
      src: "https://github.com/Ehaabsyed/Url_Shortener",
      title: "URL Shortener",
      git: "https://github.com/Ehaabsyed/Url_Shortener",
      desc: "A responsive URL shortener built with the MERN stack, allowing users to generate short, shareable links from long URLs. Each unique slug is created using the nanoid library, with validation, redirection, and error handling implemented for reliability. The frontend is developed in React, while the backend uses Node.js, Express, and MongoDB. Features a clean, intuitive UI for a smooth and efficient user experience.",
    },
    {
      img: "/blog.jpg",
      src: "https://script-sphere-blog.vercel.app/",
      title: "ScriptSphere - Blogging website",
      git: "https://github.com/Ehaabsyed/ScriptSphere-Blog",
      desc: "A full-stack blogging website built with the MERN stack, featuring blog creation, Multer and Cloudinary image uploads, and profile customization. Includes JWT authentication with secure cookies, GSAP animations, and Lenis smooth scrolling. Users can like posts, with the top 3 trending blogs shown dynamically. The responsive UI ensures an optimal reading and writing experience, combining performance, interactivity, and clean design.",
    },
    {
      img: "/gsap.png",
      src: "https://gsap-practice-puce.vercel.app/",
      title: "GSAP - Animated Website",
      git: "https://github.com/Ehaabsyed/GSAP-Practice",
      desc: "A visually engaging website demonstrating advanced GSAP animations, including scroll-triggered effects, parallax, and timeline-based sequences. Elements like text and images animate smoothly as users scroll, creating an interactive, immersive experience. Highlights expertise in GSAP’s ScrollTrigger, timelines, and easing to enhance modern web interfaces.",
    },
  ];

  return (
    <div
      id="projects"
      className="md:min-h-[200vh] min-h-[200vh] h-full relative w-full 10 bg-[#191426]"
    >
      <div className="bullet w-2 h-2 rounded-full md:left-69 left-[25px] top-11 absolute border-2 border-[#5918DF] md:top-11 md:right-[-3.5px] z-20 bg-[#1a1527]"></div>

      <h2 className="absolute left-10 top-8 md:top-8 text-gray-400 font-light text-xl md:left-82">
        Work/&gt;
      </h2>
      <h1 className="web md:block hidden absolute top-20 left-[-70px] text-[35vh] tracking-tighter text-[#261f38]">
        WEB
      </h1>
      <h1 className="web md:block hidden absolute top-170 left-[-100px] text-[35vh] tracking-tighter text-[#261f38]">
        GSAP
      </h1>

      <div className="projects mt-10 flex flex-col justify-start items-center gap-12 min-h-150 w-5/6 md:w-4/5 absolute pt-16 md:pl-10 right-0">
        {projectData.map((project, i) => (
          <div key={i} className="card md:mt-0 md:min-h-60 min-h-50 h-full flex md:mb-0 m md:flex-row flex-col w-full text-white rounded-md overflow pr-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.src}
              onMouseMove={(e) => mouseHover(e, i)}
              onMouseLeave={() => mouseLeave(i)}
              ref={(el) => (tiltRefs.current[i] = el)}
              className="img left h-full md:w-2/5 w-full shadow-[0_0_10px_#fff] rounded-md nter hover:shadow-[0_0_15px_#fff] cursor-none transition-shadow duration-300"
            >
              <img src={project.img} className="h-52 w-full rounded-md cursor-none" alt="" />
            </a>

            <div className="content right flex flex-col md:ml-5 mt-3 md:mt-0 h-full w-full md:w-3/5">
              <li className="md:text-xl text-[13px] font-bold text-[#663eb4] flex justify-start gap-2 items-center mt-1 nter">
                {project.title}
                <a href={project.src}
                  target="_blank"
                  rel="noopener noreferrer" className="text-white cursor-none text-[15px]">
                  <FaExternalLinkAlt />
                </a>
              </li>
              <p className="md:text-[16px] text-[11px] tracking-tight text-gray-500 font-medium">
                {project.desc}
              </p>
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8676af] cursor-none md:text-[15px] text-xs flex justify-start items-center gap-2 font-bold"
              >
                Github <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
