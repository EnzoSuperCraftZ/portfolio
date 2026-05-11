import { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../assets/Z_logo.png";

export function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar({ onNavigateToRoadmap }) {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

    const trilhasRoot = document.getElementById("Trilhas");

    const rect = trilhasRoot.getBoundingClientRect();

      if (window.scrollY >= rect.top) {
        setIsSolid(true);
        console.log("Scrolled past Hero section");
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${isSolid ? "solid" : ""}`}>
      <img
        className="navbar-logo"
        src={logo}
        alt="Atlas Logo"
      />

      <div className="navbar-links">
        <button className="nav-item" onClick={() => scrollToSection("Hero")}>
          <div className="nav-bubble"></div>
          <span className="nav-label">Home</span>
        </button>

        <button className="nav-item" onClick={() => scrollToSection("SobreMim")}>
          <div className="nav-bubble"></div>
          <span className="nav-label">Sobre Mim</span>
        </button>

        <button className="nav-item">
          <div className="nav-bubble"></div>
          <span className="nav-label">Contato</span>
        </button>
      </div>
    </nav>
  );
}
