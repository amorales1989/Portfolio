import React from "react";
import "./contacto.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function ContactoSection() {
  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);

  const handleSendMessage = () => {
    setShowSuccessDialog(true);
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        <div className="fila">
          {/* Formulario */}
          <div className="col">
            <input type="text" placeholder="Tú Nombre" />
            <input type="text" placeholder="Número telefónico" />
            <input type="text" placeholder="Dirección de correo" />
            <input type="text" placeholder="Tema" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
            ></textarea>
            <p>
              *Los mensajes enviados son a modo ilustrativo NO ENVIA CORREOS
              REALES.
            </p>
            <button onClick={handleSendMessage}>
              Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
              <span className="overlay"></span>
            </button>
          </div>
          {/* Mapa */}
          <div className="col">
            <img src="/ubicacion.png" alt="" />
            <div className="info">
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  El Talar, Tigre, Buenos Aires
                </li>
                <li>
                  <i className="fa-solid fa-mobile-screen"></i>
                  Llamanos: 011 - 59080306
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  Email: a19morales89@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onClose={handleCloseSuccessDialog}>
        <DialogTitle>Mensaje enviado con éxito</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Gracias por contactarme. Tu mensaje ha sido enviado correctamente.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default ContactoSection;
