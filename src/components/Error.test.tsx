import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error'; 

describe('Error Component', () => {
  it('renders error message correctly', () => {
    const errorMessage = 'Something went wrong!';
    render(<Error message={errorMessage} />);

    const errorElement = screen.getByText(`Error loading data: ${errorMessage}`);
    expect(errorElement).toBeInTheDocument();
  });
});