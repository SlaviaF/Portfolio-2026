import React, { useEffect, useState } from "react";
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import jsImg from "../assets/skills/javascript.png";
import reactImg from "../assets/skills/react.png";
import tailwindImg from "../assets/skills/tailwind.png";
import svelteImg from "../assets/skills/svelte.png";
import nodeImg from "../assets/skills/node.png";
import reduxImg from "../assets/skills/redux.png";
import tsImg from "../assets/skills/typescript.png";
import angularImg from "../assets/skills/node.png";
import sqlImg from "../assets/skills/mySQL.png";
import graphqlImg from "../assets/skills/GraphQL.png";
import csharpImg from "../assets/skills/Csharp.png";
import rxjsImg from "../assets/skills/RxJS.png";

const skills = [
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "TypeScript", img: tsImg },
  { name: "React", img: reactImg },
  { name: "Redux", img: reduxImg },
  { name: "TailwindCSS", img: tailwindImg },
  { name: "Angular", img: angularImg },
  { name: "RxJS", img: rxjsImg },
  { name: "Svelte", img: svelteImg },
  { name: "SQL", img: sqlImg },
  { name: "GraphQL", img: graphqlImg },
  { name: "C#", img: csharpImg },
  { name: "Node.js", img: nodeImg },
];

const Skills = () => {
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
      name="skills"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-24"
      style={{ backgroundColor: "#f5f4f9" }}
    >
      {/* Background blobs */}
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

      {/* Left accent line */}
      <div
        className={`absolute left-0 top-[20%] bottom-[20%] w-[3px] transition-opacity duration-1000 delay-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to bottom, transparent, #5b52a3, transparent)",
        }}
      />

      {/* Section heading */}
      <div className={`relative z-10 text-center mb-14 ${fadeUp("delay-100")}`}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-px" style={{ backgroundColor: "#5b52a3" }} />
          <span
            className="text-[0.7rem] tracking-[0.2em] uppercase font-medium"
            style={{ color: "#5b52a3" }}
          >
            Skills
          </span>
          <span className="w-8 h-px" style={{ backgroundColor: "#5b52a3" }} />
        </div>

        <h2
          className="font-light mb-3"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#1a1730",
          }}
        >
          Technologies I work <em style={{ color: "#5b52a3" }}>with.</em>
        </h2>
        <p
          className="font-light text-sm max-w-[400px] mx-auto"
          style={{ color: "#3a3555" }}
        >
          The tools and languages I use to build full stack web applications.
        </p>
      </div>

      {/* Skills grid */}
      <div
        className={`relative z-10 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4 px-10 sm:px-20 max-w-5xl w-full justify-items-center ${fadeUp("delay-300")}`}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-3 rounded-2xl py-5 px-3 w-full hover:scale-105 transform transition-all duration-300 cursor-default"
            style={{
              backgroundColor: "rgba(91, 82, 163, 0.06)",
              border: "1px solid rgba(91, 82, 163, 0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(91, 82, 163, 0.12)";
              e.currentTarget.style.borderColor = "rgba(91, 82, 163, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(91, 82, 163, 0.06)";
              e.currentTarget.style.borderColor = "rgba(91, 82, 163, 0.12)";
            }}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-10 h-10 object-contain"
            />
            <span
              className="text-[0.7rem] font-medium text-center"
              style={{ color: "#3a3555" }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;