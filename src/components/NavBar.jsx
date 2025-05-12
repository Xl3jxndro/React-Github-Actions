import React from "react";
import './NavBar.css';

export default function NavBar({ onSectionChange, currentSection }) {
  return (
    <nav className="navbar">
      <ul>
        <li className={currentSection === 'ambientales' ? 'active' : ''}>
          <button onClick={() => onSectionChange('ambientales')}>Temas Ambientales</button>
        </li>
        <li className={currentSection === 'moderna' ? 'active' : ''}>
          <button onClick={() => onSectionChange('moderna')}>Educación Moderna</button>
        </li>
        <li className={currentSection === 'psicologico' ? 'active' : ''}>
          <button onClick={() => onSectionChange('psicologico')}>Cuidado Psicológico</button>
        </li>
      </ul>
    </nav>
  );
}
