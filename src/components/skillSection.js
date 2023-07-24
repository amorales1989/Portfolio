import React, { useEffect } from "react";
import "./skillSection.css"; // Importar los estilos CSS desde el archivo externo

function SkillsSection() {
  useEffect(() => {
    function efectoHabilidades() {
      var skills = document.getElementById("skills");
      var distancia_skills =
        window.innerHeight - skills.getBoundingClientRect().top;
      if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        // Verificar que los elementos estén presentes antes de agregar las clases
        if (habilidades && habilidades.length > 0) {
          habilidades[0].classList.add("javascript");
          habilidades[1].classList.add("htmlcss");
          habilidades[2].classList.add("React");
          habilidades[3].classList.add("Data");
          habilidades[4].classList.add("GitHub");
          habilidades[5].classList.add("comunicacion");
          habilidades[6].classList.add("trabajo");
          habilidades[7].classList.add("creatividad");
          habilidades[8].classList.add("dedicacion");
          habilidades[9].classList.add("proyect");
        }
      }
    }

    window.onscroll = function () {
      efectoHabilidades();
    };
  }, []);

  return (
    <div className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>Habilidades</h2>
        <div className="fila">
          <div className="col">
            <h3>Habilidades Técnicas</h3>
            <div className="skill">
              <span>Javascript</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>75%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>79%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>React</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Data base</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>70%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>GitHub & Jira</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>60%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <h3>Habilidades Profesionales</h3>
            <div className="skill">
              <span>Comunicación</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Trabajo en Equipo</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>95%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Creatividad</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Dedicación</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Gestión de Proyectos</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
