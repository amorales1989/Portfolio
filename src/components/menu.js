import React from 'react';

function Menu() {
  return (
    <div className="bg-light p-3">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Perfil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Contacto</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
