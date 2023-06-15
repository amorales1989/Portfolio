import React from "react";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-dark text-light p-3"
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <p style={{ marginBottom: "0" }}>Walter Morales &copy; 2023</p>
        <p style={{ marginBottom: "0" }}>Número de celular: +54-1159080306</p>
        <p style={{ marginBottom: "0" }}>Dirección: Buenos Aires, Argentina</p>
      </div>
    </footer>
  );
}

export default Footer;
