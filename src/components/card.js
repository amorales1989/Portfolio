import React from "react";

function Card({ title, description, image }) {
  return (
    <div id="proyectos" className="row card-section">
      <div
        className="card mb-3"
        style={{
          backgroundColor: "#0d073f",
          color: "#fff",
          paddingLeft: "0px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img className="img-fluid" src={image} alt="Imagen del proyecto" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
