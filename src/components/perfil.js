import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Fade } from "react-bootstrap";
import Title from "./titleAnimation";
import foto from '../assets/fotoperfilalemorales.jpeg'

const ProfileCard = () => {
  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (showImage) {
      setShowText(true);
    }
  }, [showImage]);

  const handleImageLoad = () => {
    setShowImage(true);
  };

  const cardStyle = {
    backgroundColor: "transparent",
    color: "#FFF",
    transition: "transform 0.9s",
    transform: showText && showImage ? "translateY(-5px)" : "translateY(0)",
    border: "none",
    margin: "70px auto 0",
    width: "400px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const textCardStyle = {
    marginTop: "20px",
    backgroundColor: "transparent",
    border: "none",
    position: "relative",
    overflow: "hidden",
    animation: showText ? "slide-in 1s forwards" : "none",
    color: "#FFFAF0", // Color marfil
    width: "70%", // Reducción del 30% del ancho
    textAlign: "center", // Centrar el contenido de texto horizontalmente
    alignItems: "center", // Centrar los elementos secundarios verticalmente
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "240px", // Reducción del 60% del tamaño original
    height: "auto",
    margin: "0 auto", // Centrar horizontalmente
    background: "transparent",
  };

  return (
    <div style={containerStyle}>
      <Card className="text-center" style={cardStyle}>
        <Title />
      </Card>
      <div
        style={{
          maxWidth: "50%",
          textAlign: "-webkit-center",
          marginBottom: "10%",
        }}
      >
        <Fade in={showImage}>
          <Card
            style={{
              background: "transparent",
              border: "none",
              margin: "10px 0",
            }}
          >
            <Card.Img
              variant="top"
              src={foto}
              alt="Foto de perfil"
              style={imageStyle}
              onLoad={handleImageLoad} // Evento onLoad para marcar la imagen como cargada
            />
          </Card>
        </Fade>
        <Fade in={showText}>
          <Card style={textCardStyle}>
            <Card.Body>
              <Card.Text>
                Siempre busco aprender por mi cuenta y disfruto de la
                exploración de nuevos conocimientos. Mi mente está llena de
                ideas originales y me comprometo a alcanzar mis metas con
                determinación. La honestidad y la responsabilidad son valores
                fundamentales para mí, y siempre cumplo con mis compromisos de
                manera puntual.
              </Card.Text>
            </Card.Body>
          </Card>
        </Fade>
      </div>
    </div>
  );
};

export default ProfileCard;
