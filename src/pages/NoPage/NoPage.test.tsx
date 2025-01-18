import React from 'react';
import { render, screen } from '@testing-library/react';
import NoPage from './NoPage';

describe('NoPage Component', () => {
  it('renders the 404 error code', () => {
    render(<NoPage />);
    const errorCode = screen.getByText('404');
    expect(errorCode).toBeInTheDocument();
    expect(errorCode).toHaveClass('text-indigo-600');
  });

  it('renders the "Page not found" heading', () => {
    render(<NoPage />);
    const heading = screen.getByRole('heading', { name: /page not found/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl');
  });

  it('renders the descriptive message', () => {
    render(<NoPage />);
    const description = screen.getByText(/sorry, we couldn’t find the page you’re looking for/i);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-pretty text-lg font-medium text-gray-500 sm:text-xl/8');
  });

  it('renders a link to go back home', () => {
    render(<NoPage />);
    const link = screen.getByRole('link', { name: /go back home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveClass(
      'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    );
  });

  it('renders all elements within the main container', () => {
    render(<NoPage />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveClass('grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8');
  });
});
