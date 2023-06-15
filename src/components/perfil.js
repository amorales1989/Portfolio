import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Title from "./titleAnimation";

const ProfileCard = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cardStyle = {
    width: "33%",
    height: "50%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#0d073f", // Fondo oscuro
    color: "#FFF", // Texto color claro
    transition: "transform 0.3s",
    transform: hovered ? "translateY(-5px)" : "translateY(0)",
  };

  return (
    <Card
      className="text-center mx-auto"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Title />

      <Card.Img
        variant="top"
        src="https://drive.google.com/uc?export=view&id=17R6aQrtHoY6QgDiahknIjOe2lqGE1Uku"
        alt="Foto de perfil"
      />
      <Card.Body>
        <Card.Text>
          Siempre busco aprender por mi cuenta y disfruto de la exploración de
          nuevos conocimientos. Mi mente está llena de ideas originales y me
          comprometo a alcanzar mis metas con determinación. La honestidad y la
          responsabilidad son valores fundamentales para mí, y siempre cumplo
          con mis compromisos de manera puntual.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
