import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = "") =>
    `transition-all duration-700 ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

 
  return (
    <div
      name="about"
      ref={ref}
      className="relative w-full min-h-screen flex items-center overflow-hidden py-24"
      style={{ backgroundColor: "#f5f4f9" }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[55%] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(197, 190, 230, 0.35)" }}
        />
        <div
          className="absolute top-[-5%] left-[-5%] w-[35%] h-[40%] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(230, 210, 220, 0.35)" }}
        />
      </div>

 
      <div className="relative z-10 max-w-3xl w-full mx-auto px-10 sm:px-20 flex flex-col items-center text-center">

        {/* Section label */}
        <div className={`flex items-center gap-3 mb-10 ${fadeUp("delay-100")}`}>
          <span className="w-8 h-px" style={{ backgroundColor: "#5b52a3" }} />
          <span
            className="text-[0.7rem] tracking-[0.2em] uppercase font-medium"
            style={{ color: "#5b52a3" }}
          >
            About me
          </span>
          <span className="w-8 h-px" style={{ backgroundColor: "#5b52a3" }} />
        </div>

        {/* Heading */}
        <h2
          className={`font-light leading-tight mb-8 ${fadeUp("delay-200")}`}
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#1a1730",
          }}
        >
          Building things{" "}
          <em style={{ color: "#5b52a3" }}>end to end.</em>
        </h2>

        {/* Bio */}
        <p
          className={`font-light text-sm leading-relaxed mb-5 ${fadeUp("delay-300")}`}
          style={{ color: "#3a3555" }}
        >
          I'm Slavia, a full stack developer based in Copenhagen with a strong
          frontend focus. I build clean, accessible web applications and enjoy
          owning the full process from database to interface.
        </p>

        <p
          className={`font-light text-sm leading-relaxed mb-12 ${fadeUp("delay-[400ms]")}`}
          style={{ color: "#3a3555" }}
        >
          My stack spans React, Redux, TypeScript, Angular, RxJS, Node.js, TailwindCSS, SQL,  C#, with
          real-world experience integrating systems like Moodle and WordPress in
          production environments. I care about maintainable code, good
          collaboration, and shipping things that actually work.
        </p>

        


      </div>
    </div>
  );
};

export default About;