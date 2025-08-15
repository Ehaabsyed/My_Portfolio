import gsap from "gsap";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


function Nav({ activeSection }) {
  const lenis = new Lenis({ autoRaf: true });
  const links = [
    { id: "start", label: "Start" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const lastScrollY = useRef(0);
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false); // close menu after clicking link
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY <= lastScrollY.current || currentScrollY < 100);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations
  const logo = useRef();
  const menu = useRef();
  const menus = useRef();
  const linksRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:840px)", () => {
      gsap.from(logo.current, { y: -200, duration: 1.5 });
      gsap.from(".ul", {
        y: -200,
        opacity: 0,
        duration: 1.5,
        stagger: 0.25,
        delay: 0.3,
        ease: "power4.out",
      });
    });

    mm.add("(max-width:839px)", () => {
      gsap.from(menu.current, { duration: 1, opacity: 0 });
      
    });

    return () => mm.revert();
  }, []);
   useEffect(() => {
    if (menus.current) {
      if (menuOpen) {
        gsap.fromTo(
          menus.current,
          { x: 300, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(menus.current, {
          x: 300,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    }
  }, [menuOpen]);

  return (
    <div
      className={`fixed z-30 navbar h-16 w-full text-white p-8 flex items-center justify-between bg-opacity-50 transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      {/* Logo */}
      <div
        ref={logo}
        className="logo text-2xl md:text-5xl animate-pulse mt-4 text-[#5918DF] hover:scale-105 duration-700 "
        onClick={() => scrollToSection("start")}
      >
        &lt;<span className="text-white font-extrabold ml-2 mr-2">Ehaab</span>/&gt;
      </div>

      {/* Desktop Links */}
      <div className="nav-links md:block hidden mr-6 mt-4">
        <ul className="flex ul gap-5">
          {links.map(({ id, label }, index) => (
            <li
              ref={(el) => (linksRef.current[index] = el)}
              key={id}
              onClick={() => scrollToSection(id)}
              className={` li text-2xl duration-300 hover:text-[#eaeaee] font-medium ${
                activeSection === id
                  ? "text-[#fff] border-b-2 border-[#5918DF] font-bold"
                  : "text-[#C3C3C5] border-none"
              }`}
            >
              {label} <span className="text-zinc-600">/&gt;</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden block mt-3" ref={menu}>
        <CiMenuFries
          className="text-2xl "
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div ref={menus} className="fixed mobile-links top-0 right-0 p-16 pb-5 w-fit rounded-2xl  bg-[#1a152750] flex flex-col items-center pt-10 z-40 md:hidden">
          <div className="close text-3xl absolute top-3 right-5" onClick={() => setMenuOpen(!menuOpen)}><IoMdClose/></div>
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-white text-2xl py-5 w-full hover:bg-[#5918DF] transition-colors duration-300"
            >
              {label} /&gt;
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Nav;
