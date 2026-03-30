import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Main navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 flex items-center px-8 sm:px-14 justify-between ${
          scrolled ? "h-[64px] backdrop-blur-md shadow-sm" : "h-[80px] bg-transparent"
        }`}
        style={
          scrolled
            ? { backgroundColor: "rgba(245, 244, 249, 0.92)", boxShadow: "0 1px 12px rgba(91, 82, 163, 0.08)" }
            : {}
        }
      >
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span
            className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform duration-300"
            style={{ backgroundColor: "#5b52a3" }}
          />
          <span
            className="font-medium text-sm tracking-[0.08em] uppercase"
            style={{ color: "#1a1730" }}
          >
            PORTFOLIO<span style={{ color: "#5b52a3" }}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                className="text-[0.75rem] tracking-[0.12em] uppercase font-medium transition-colors duration-300 cursor-pointer"
                style={{ color: "#7a75a8" }}
                activeClass="active-nav"
                spy={true}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5b52a3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7a75a8")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop social + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/slavia-furtado-00b649169/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7a75a8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#5b52a3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7a75a8")}
            className="transition-colors duration-300"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://github.com/SlaviaF"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7a75a8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#5b52a3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7a75a8")}
            className="transition-colors duration-300"
          >
            <FaGithub size={16} />
          </a>
          <div className="w-px h-4 mx-1" style={{ backgroundColor: "#c4c0df" }} />
          <Link to="contact" smooth={true} duration={500}>
            <button
              className="text-[0.7rem] tracking-[0.12em] uppercase font-medium text-white px-4 py-2 rounded-full transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: "#1a1730" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5b52a3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1730")}
            >
              Hire me
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setShowNav(!showNav)}
          className="md:hidden transition-colors duration-300 z-50"
          style={{ color: "#4a4570" }}
        >
          {showNav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 ${
          showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#f5f4f9" }}
      >
        {/* Decorative blob */}
        <div
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: "rgba(197, 190, 230, 0.4)" }}
        />

        <ul className="flex flex-col items-center gap-2 relative z-10">
          {navLinks.map(({ to, label }, i) => (
            <li key={to} style={{ transitionDelay: `${i * 60}ms` }}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                onClick={() => setShowNav(false)}
                className={`block text-4xl font-light transition-all duration-500 py-3 cursor-pointer tracking-tight ${
                  showNav ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ fontFamily: "'Georgia', serif", color: "#1a1730" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5b52a3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1730")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile social */}
        <div className="flex items-center gap-6 mt-12 relative z-10">
          <a
            href="https://www.linkedin.com/in/slavia-furtado-00b649169/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7a75a8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#5b52a3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7a75a8")}
            className="transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/SlaviaF"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7a75a8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#5b52a3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7a75a8")}
            className="transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;