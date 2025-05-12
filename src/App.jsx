import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TemasAmbientales from './sections/TemasAmbientales';
import EducacionModerna from './sections/EducacionModerna';
import CuidadoPsicologico from './sections/CuidadoPsicologico';

function App() {
  const [section, setSection] = useState('ambientales');

  let SectionComponent;
  if (section === 'ambientales') SectionComponent = TemasAmbientales;
  else if (section === 'moderna') SectionComponent = EducacionModerna;
  else SectionComponent = CuidadoPsicologico;

  return (
    <div className="App">
      <NavBar onSectionChange={setSection} currentSection={section} />
      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '1rem' }}>
        <SectionComponent />
      </main>
    </div>
  );
}

export default App;
