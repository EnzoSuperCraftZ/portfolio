import { useEffect, useState, useRef } from "react";
import "./hero.css";
import Navbar, { scrollToSection } from "./Navbar";
import { motion } from "motion/react"
import seta from "../assets/chevron-up-svgrepo-com.svg";
import logo from "../assets/Z_logo.png";
import atlasLogo from "../assets/logo-semFundo-Atlas_layers_cropped.png";
import ecobitsLogo from "../assets/logo-EcoBits.png";

export default function Hero() {
   
  const root = useRef(null);

  function rotateElement(event) {
    const element = root.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const middleX = element.clientWidth / 2;
    const middleY = element.clientHeight / 2;

    const offsetX = ((x - middleX)) * -1 / middleX * 45;
    const offsetY = ((y - middleY)) / middleY * 45;

    element.style.setProperty("--rotateX", offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");

  }

  return (
    <section className="hero" id="Hero">

      <div className="zLogo-container">
        <span className="titulo">EN</span>
        <img 
        className="zLogo" id="logo"
          ref={root}
          src={logo} alt="logo"
          ></img>
          <span className="titulo">O</span>
      </div>

      <div className="smallLogo-container">
        <img className="smallLogo" id="Atlaslogo" src={atlasLogo} alt="Atlas Logo"/>
        <img className="smallLogo" id="Ecobitslogo" src={ecobitsLogo} alt="EcoBits Logo"/>
      </div>


        {/* <img className="seta" src={seta} alt="seta" 
        onClick={() => scrollToSection("Trilhas")}/> */}
    </section>
  );
}