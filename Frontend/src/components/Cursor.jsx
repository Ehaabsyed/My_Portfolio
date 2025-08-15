import gsap from "gsap";
import { useEffect } from "react";

function Cursor() {

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 2, duration: 0.3, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
    };

    // Track cursor globally
    document.addEventListener("mousemove", handleMouseMove);

    // Scale cursor on hover
    const hoverElements = document.querySelectorAll("a, button, li");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="cursor h-7 w-7 hidden rounded-full md:flex justify-center items-center border-2 bg-transparent border-[#5918DF] fixed pointer-events-none z-50"
    >
      <div className="point h-2 w-2 bg-[#5918DF] rounded-full"></div>
    </div>
  );
}

export default Cursor;
