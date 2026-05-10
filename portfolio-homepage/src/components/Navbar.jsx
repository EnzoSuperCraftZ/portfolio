import { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../assets/logo-semFundo-Atlas_layers_cropped.png";

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
        <button className="nav-btn" onClick={() => scrollToSection("Sobre")}>
          Saiba Mais
        </button>

        <button className="nav-btn" onClick={() => scrollToSection("Trilhas")}>
          Trilhas
        </button>
      </div>
    </nav>
  );
}
