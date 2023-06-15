import React, { useState, useEffect } from "react";

function Title({ title, description }) {
  const [name, setName] = useState("");

  useEffect(() => {
    const nameText = "Walter Alejandro Morales";
    let index = 0;

    const timer = setInterval(() => {
      if (index <= nameText.length) {
        setName(nameText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 200); // Tiempo entre cada carácter agregado (puedes ajustar esto según tus necesidades)

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="card mb-3"
      style={{ backgroundColor: "#0d073f", color: "#fff" }}
    >
      <div className="card-body">
        <h3 className="card-title" style={{ fontSize: "24px" }}>
          {name}
        </h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Title;
