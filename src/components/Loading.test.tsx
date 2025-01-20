import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading'; // Adjust the path if needed

test('renders loading text', () => {
  render(<Loading />);
  const loadingText = screen.getByText(/Loading.../i); 
  expect(loadingText).toBeInTheDocument(); 
});