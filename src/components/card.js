import React from "react";

function Card({ title, description, image, link }) {
  return (
    <div id="proyectos" className="row card-section">
      <div
        className="card mb-3"
        style={{
          backgroundColor: "#0d073f",
          color: "#fff",
          paddingLeft: "0px",
          height: "210px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4" style={{ position: "relative" }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <img
                className="img-fluid"
                src={image}
                alt="Imagen del proyecto"
                style={{ height: "209px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="currentColor"
                  className="bi bi-play-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </div>
            </a>
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

