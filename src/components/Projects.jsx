import React, { useEffect, useState } from "react";
import projectsData from "../ProjectsData";

const Projects = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay = "") =>
    `transition-all duration-700 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <div
      name="projects"
      className="relative w-full min-h-screen py-24 overflow-hidden"
      style={{ backgroundColor: "#f5f4f9" }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[50%] h-[55%] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(197, 190, 230, 0.38)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[45%] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(230, 210, 220, 0.4)" }}
        />
      </div>

      {/* Left accent line */}
      <div
        className={`absolute left-0 top-[20%] bottom-[20%] w-[3px] transition-opacity duration-1000 delay-300 ${visible ? "opacity-100" : "opacity-0"
          }`}
        style={{
          background: "linear-gradient(to bottom, transparent, #5b52a3, transparent)",
        }}
      />

      {/* Main container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-10 sm:px-20 flex flex-col gap-12">

        {/* Section heading */}
        <div className={`text-center ${fadeUp("delay-100")}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px" style={{ backgroundColor: "#5b52a3" }} />
            <span
              className="text-[0.7rem] tracking-[0.2em] uppercase font-medium"
              style={{ color: "#5b52a3" }}
            >
              Projects
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
            Things I've <em style={{ color: "#5b52a3" }}>built.</em>
          </h2>
          <p
            className="font-light text-sm max-w-[400px] mx-auto"
            style={{ color: "#3a3555" }}
          >
            A selection of projects from work and personal exploration.
          </p>
        </div>

        {/* Projects grid */}
        <div className={`grid gap-6 sm:grid-cols-2 ${fadeUp("delay-200")}`}>
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                border: "1px solid rgba(91, 82, 163, 0.12)",
                boxShadow: "0 4px 24px rgba(91, 82, 163, 0.08)",
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col gap-2">
                <h2
                  className="text-base font-medium"
                  style={{ color: "#1a1730" }}
                >
                  {project.title}
                  <span class="ml-2">             {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit Project
                    </a>
                  )}</span>
                </h2>

                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-200"
                  style={{ color: "#5b52a3" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1730")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#5b52a3")}
                >
                  View Source Code →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom-right meta */}
      <div
        className={`absolute bottom-8 right-10 hidden md:flex items-center gap-5 transition-opacity duration-700 delay-[1000ms] ${visible ? "opacity-100" : "opacity-0"
          }`}
      >

      </div>
    </div>
  );
};

export default Projects;