import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay = "") =>
    `transition-all duration-700 ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <div
      name="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#f5f4f9" }}
    >
      {/* Background blobs lavender + blush */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[55%] h-[60%] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(197, 190, 230, 0.38)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[45%] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(230, 210, 220, 0.4)" }}
        />
      </div>

      {/* Ghost text */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 font-light leading-none select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "clamp(10rem, 22vw, 20rem)",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          color: "rgba(160, 150, 200, 0.15)",
        }}
      >
        SF
      </span>

      {/* Left accent line */}
      <div
        className={`absolute left-0 top-[20%] bottom-[20%] w-[3px] transition-opacity duration-1000 delay-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to bottom, transparent, #5b52a3, transparent)",
        }}
      />

      {/* Main content — centered */}
      <div className="relative z-10 max-w-2xl w-full mx-auto px-10 sm:px-20 text-center flex flex-col items-center">

        {/* Name */}
        <h1
          className={`font-light leading-[0.92] tracking-tight ${fadeUp("delay-200")}`}
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2.5rem, 9vw, 8rem)",
            color: "#393174ff",
            textWrap: "nowrap"
          }}
        >
          Slavia Furtado
 
        </h1>

        {/* Role */}
        <h2
          className={`text-xl sm:text-3xl font-light mt-5 tracking-wide ${fadeUp("delay-300")}`}
          style={{ fontFamily: "'Georgia', serif", color: "#4a4570" }}
        >
          Fullstack Developer
        </h2>

        {/* Divider */}
        <div className={`flex items-center gap-3 my-8 ${fadeUp("delay-[400ms]")}`}>
          <div className="w-10 h-px" style={{ backgroundColor: "#c4c0df" }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(91, 82, 163, 0.3)" }} />
          <div className="w-4 h-px" style={{ backgroundColor: "#c4c0df" }} />
        </div>

        {/* Bio */}
        <p
          className={`font-light text-[1rem] leading-relaxed max-w-[420px] ${fadeUp("delay-500")}`}
          style={{ color: "#3a3555" }}
        >
          Full stack developer with a strong frontend focus, building fast, accessible web applications from UI to API with clean, maintainable code.
        </p>

        {/* CTA row */}
        <div className={`flex items-center justify-center gap-6 mt-10 ${fadeUp("delay-[600ms]")}`}>
          <Link to="projects" smooth={true} duration={500}>
            <button
              className="group flex items-center gap-2 text-white text-xs font-medium tracking-[0.12em] uppercase px-6 py-3.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: "#1a1730" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5b52a3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1730")}
            >
              View Projects
              <HiArrowNarrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;