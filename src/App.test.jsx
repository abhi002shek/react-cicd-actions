import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'
import App from './App';

test('renders DevOps Monitoring Lab heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/DevOps Monitoring Lab/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Happy New Year text', () => {
  render(<App />);
  const newYearElement = screen.getByText(/Happy New Year 2026/i);
  expect(newYearElement).toBeInTheDocument();
});

test('renders like button', () => {
  render(<App />);
  const likeButton = screen.getByRole('button', { name: /like/i });
  expect(likeButton).toBeInTheDocument();
});

test('contains monitoring dashboard text', () => {
  render(<App />);
  const monitoringText = screen.getByText(/Real-Time Monitoring Dashboard/i);
  expect(monitoringText).toBeInTheDocument();
});