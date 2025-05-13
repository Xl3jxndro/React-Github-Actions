import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('muestra la sección de Temas Ambientales por defecto', () => {
    render(<App />);
    expect(screen.getByText(/Temas Ambientales Actuales/i)).toBeInTheDocument();
  });

  it('navega a Métodos de Educación Modernos', async () => {
    render(<App />);
    await userEvent.click(screen.getByText(/Educación Moderna/i));
    expect(screen.getByText(/Métodos de Educación Modernos/i)).toBeInTheDocument();
  });

  it('navega a Cuidado Psicológico', async () => {
    render(<App />);
    await userEvent.click(screen.getByText(/Cuidado Psicológico/i));
    expect(screen.getByText(/Cuidado Psicológico en Niños/i)).toBeInTheDocument();
  });
});
