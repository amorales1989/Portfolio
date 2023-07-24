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
                allow="autoplay; fullscreen"
                allowfullscreen
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
