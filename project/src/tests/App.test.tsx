import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders form generator with initial schema', () => {
  render(<App />);
  expect(screen.getByText('Dynamic Form Generator')).toBeDefined();
  expect(screen.getByText('Project Requirements Survey')).toBeDefined();
});

test('toggles layout when button is clicked', () => {
  render(<App />);
  const toggleButton = screen.getByText('Toggle Layout');
  fireEvent.click(toggleButton);
  // Add assertions for layout changes
});