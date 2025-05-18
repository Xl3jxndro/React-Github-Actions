import React from "react";
import './NavBar.css';
import log from '../logger';

export default function NavBar({ onSectionChange, currentSection }) {
  log.info('Renderizando NavBar. Sección actual:', currentSection);

  return (
    <nav className="navbar">
      <ul>
        <li className={currentSection === 'ambientales' ? 'active' : ''}>
          <button onClick={() => { log.debug('Navegando a Temas Ambientales'); onSectionChange('ambientales'); }}>Temas Ambientales</button>
        </li>
        <li className={currentSection === 'moderna' ? 'active' : ''}>
          <button onClick={() => { log.debug('Navegando a Educación Moderna'); onSectionChange('moderna'); }}>Educación Moderna</button>
        </li>
        <li className={currentSection === 'psicologico' ? 'active' : ''}>
          <button onClick={() => { log.debug('Navegando a Cuidado Psicológico'); onSectionChange('psicologico'); }}>Cuidado Psicológico</button>
        </li>
      </ul>
    </nav>
  );
}
