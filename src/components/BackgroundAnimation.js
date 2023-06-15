import React, { useEffect } from "react";

function BackgroundAnimation() {
  useEffect(() => {
    // Obtener el elemento del fondo
    const background = document.getElementById("background");

    // Textos de programación para el loop
    const codeTexts = [
      'console.log("Hola, mundo!");',
      "for (let i = 0; i < 10; i++) {",
      "  console.log(i);",
      "}",
      "function sum(a, b) {",
      "  return a + b;",
      "}",
      "const result = sum(3, 5);",
      'console.log("El resultado es:", result);',
      "// Más código...",
    ];

    // Función para mostrar los textos de programación en el fondo
    function showCodeTexts() {
      let currentIndex = 0;

      function displayCodeText() {
        // Obtener el texto actual
        const codeText = codeTexts[currentIndex];

        // Mostrar el texto en el fondo
        background.textContent = codeText;

        // Actualizar el índice para el siguiente texto
        currentIndex = (currentIndex + 1) % codeTexts.length;

        // Retraso antes de mostrar el siguiente texto
        setTimeout(displayCodeText, 2000);
      }

      // Iniciar el loop de mostrar los textos
      displayCodeText();
    }

    // Iniciar la animación del fondo al cargar el componente
    showCodeTexts();
  }, []);

  return (
    <div id="background" className="background-image">
      {/* Contenido adicional si es necesario */}
    </div>
  );
}

export default BackgroundAnimation;
