import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('muestra la sección de Temas Ambientales por defecto', () => {
    render(<App />);
    expect(screen.getByText(/Temas Ambientales Actuales/i)).toBeInTheDocument();
  });

  it('navega a Métodos de Educación Modernos', () => {
    render(<App />);
    screen.getByText(/Educación Moderna/i).click();
    expect(screen.getByText(/Métodos de Educación Modernos/i)).toBeInTheDocument();
  });

  it('navega a Cuidado Psicológico', () => {
    render(<App />);
    screen.getByText(/Cuidado Psicológico/i).click();
    expect(screen.getByText(/Cuidado Psicológico en Niños/i)).toBeInTheDocument();
  });
});
