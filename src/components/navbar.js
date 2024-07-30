import React from "react";
import logo from "../logoWM.png";
import Tooltip from "@mui/material/Tooltip";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import './navbar.css'

function Navbar() {
  const handleDownload = () => {
    // Crea un elemento <a> temporal y simula el clic para iniciar la descarga
    const tempLink = document.createElement("a");
    tempLink.href = "/Profile Walter Morales.pdf";
    tempLink.setAttribute("download", "Profile Walter Morales.pdf");
    tempLink.click();
  };
  return (
    <nav
      className="navbar navbar-dark bg-dark"
      style={{ paddingLeft: "10px", color: "white" }}
    >
      <img src={logo} alt="Logo" height="30" />
      <div class="cards">
        <ul>
          <li class="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <a href="">
              <svg
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
                class="svg"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path></svg
              ></a>
            <div class="text">Facebook</div>
          </li>
          <li class="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <a href="">
              <svg
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
            <div class="text">Twitter</div>
          </li>
          <li class="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <a href="">
              <svg
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <div class="text">Instagram</div>
          </li>
        </ul>
      </div>

      <ul className="nav justify-content-center">
        <Tooltip title="Descargar CV">
          <a
            style={{ paddingTop: "5px", paddingRight: "16px" }}
            onClick={handleDownload}
          >
            <SimCardDownloadIcon style={{ fontSize: 31, color: "white" }} />
          </a>
        </Tooltip>
        <Tooltip title="Github">
          <a
            classname="Github"
            href="https://github.com/amorales1989"
            target="_blank"
            rel="noopener noreferrer"
            style={{ paddingTop: "5px", paddingRight: "20px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              style={{ margintop: "5px" }}
              fill="white"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </Tooltip>
        <Tooltip title="Linkedin">
          <a
            classname="linkedin"
            href="https://www.linkedin.com/in/alejandro-morales-42b47123b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ paddingTop: "5px", paddingRight: "5px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              style={{ margintop: "5px" }}
              fill="white"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </Tooltip>
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="/"
            href="/#"
            style={{ color: "white" }}
          >
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#titulo" style={{ color: "white" }}>
            Proyectos
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#perfil" style={{ color: "white" }}>
            Perfil
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto" style={{ color: "white" }}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
