import React, { useState, useEffect } from "react";

const Contact = () => {
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
      name="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 py-24"
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

      <div
        className={`relative z-10 flex flex-col gap-6 max-w-[560px] w-full ${fadeUp("delay-100")}`}
      >
        {/* Section label */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-px" style={{ backgroundColor: "#5b52a3" }} />
          <span
            className="text-[0.7rem] tracking-[0.2em] uppercase font-medium"
            style={{ color: "#5b52a3" }}
          >
            Contact
          </span>
          <span className="w-8 h-px" style={{ backgroundColor: "#5b52a3" }} />
        </div>

        {/* Heading */}
        <h2
          className="font-light text-center"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#1a1730",
          }}
        >
          Get in <em style={{ color: "#5b52a3" }}>touch.</em>
        </h2>

        <p
          className="text-sm font-light text-center mb-1"
          style={{ color: "#3a3555" }}
        >
          Fill in the form or shoot me an email at{" "}
          <a
            href="mailto:slaviafurtado@gmail.com"
            className="transition-colors duration-200"
            style={{ color: "#5b52a3" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1730")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5b52a3")}
          >
            slaviafurtado@gmail.com
          </a>
        </p>

        {/* Form */}
        <form
          action="https://getform.io/f/7f43f393-e7ec-4f49-a471-a9d8184f6ff6"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-xl text-sm font-light transition-all duration-300 outline-none"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(91, 82, 163, 0.15)",
              color: "#1a1730",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#5b52a3")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(91, 82, 163, 0.15)")}
          />
        
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            className="w-full px-4 py-3 rounded-xl text-sm font-light transition-all duration-300 outline-none resize-none"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(91, 82, 163, 0.15)",
              color: "#1a1730",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#5b52a3")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(91, 82, 163, 0.15)")}
          />

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="text-[0.75rem] tracking-[0.12em] uppercase font-medium text-white px-8 py-3.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: "#1a1730" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5b52a3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1730")}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;