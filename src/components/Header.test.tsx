import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header'; // Assuming your Logo.png is in the same directory

test('renders Header component with logo and title', () => {
  render(<Header />);

  // Check if the logo image is rendered
  const logoImage = screen.getByRole('img', { name: /logo/i }); 
  expect(logoImage).toBeInTheDocument();

  // Check if the title is rendered
  const titleElement = screen.getByRole('heading', { level: 1 });
  expect(titleElement).toHaveTextContent('Continent Quest'); 
});