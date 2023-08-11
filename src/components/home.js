import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import ProfileCard from "./perfil";
import Card from "./card";
import Footer from "./footer";

import "../App.css";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import SkillsSection from "./skillSection";
import ContactoSection from "./contacto";

function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonStyle = {
    position: "fixed",
    bottom: "80px",
    right: "30px",
    opacity: showButton ? 0.5 : 0,
    transition: "opacity 0.5s ease-in-out",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
  };

  const Phaser =
    "https://res.cloudinary.com/duzohsrci/image/upload/v1691794409/vziz1pkfix4be6yajvyv.jpg";

  return (
    <div className="home-container background-image">
      <div className="background-image"></div>
      <Navbar />
      <div className="container">
        <div className="profile-section">
          <ProfileCard />
        </div>
        <div id="titulo" className="titulo">
          Proyectos Realizados
        </div>
        <div className="card-section">
          <div className="row">
            <div className="col-md-12">
              <Card
                title="Henry-Market"
                description="Participé en el desarrollo remoto de un proyecto de e-commerce en equipo, aplicando Scrum y Git/GitHub. Mis responsabilidades incluyeron crear la API inicial, implementar la pasarela de pago (Mercado Pago) y diseñar un sistema de puntos para descuentos en compras. Demostré habilidades en trabajo en equipo, Express.js, PostgreSQL, Node.js, JavaScript y React.js. Esta experiencia fortaleció mi capacidad para colaborar en proyectos remotos."
                image="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f2ba8678-eb26-4440-b2b2-ae43fb26cfaf.gif?ClientID=vimeo-core-prod&Date=1686329465&Signature=87301d72994ba1da38fc673e34b43a90ba6491d4"
                frameborder="0"
                link="https://www.linkedin.com/posts/alejandro-morales-42b47123b_proyecto-it-market-activity-7001338948467757056-c6S_?utm_source=share&utm_medium=member_desktop"
                allow="autoplay; fullscreen"
                allowfullscreen
              />
              <Card
                link="https://phaser-game-delta.vercel.app/"
                title="Phaser-Game"
                description="En este proyecto utilize Phaser.io que es un popular framework de código abierto para el desarrollo de juegos en 2D basados en navegador. al que le agregue mas cosas como el boton de reiniciar cuando termina el juego y que la puntuacion de las estrellas sea aleatoria entre 1 y 10, el juego tambien esta adaptado para moviles en el cual se incorporo un joysticks, "
                image={Phaser}
                //style={{ height: "300px" }}
              />
            </div>
          </div>
        </div>
        <SkillsSection />
        <ContactoSection />
      </div>
      <Button
        className="btn-back-to-top"
        onClick={handleScrollToTop}
        style={buttonStyle}
      >
        <FaArrowUp />
      </Button>
      <Footer />
    </div>
  );
}

export default Home;
