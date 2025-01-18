import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryFlag from './CountryFlag';
import getFlagUrl from '../utils/getFlagUrl';

// Mock the getFlagUrl function
jest.mock('../utils/getFlagUrl', () => jest.fn());

describe('CountryFlag Component', () => {
  const mockGetFlagUrl = getFlagUrl as jest.Mock;

  beforeEach(() => {
    mockGetFlagUrl.mockClear();
  });

  it('renders the flag image with the correct URL', () => {
    const countryCode = 'US';
    const mockUrl = 'https://flagcdn.com/w320/us.png';
    mockGetFlagUrl.mockReturnValue(mockUrl);

    render(<CountryFlag countryCode={countryCode} />);

    const imgElement = screen.getByRole('img', { name: `Flag of ${countryCode}` });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockUrl);
  });

  it('applies default width and height classes', () => {
    const countryCode = 'FR';
    const mockUrl = 'https://flagcdn.com/w320/fr.png';
    mockGetFlagUrl.mockReturnValue(mockUrl);

    render(<CountryFlag countryCode={countryCode} />);

    const imgElement = screen.getByRole('img', { name: `Flag of ${countryCode}` });
    expect(imgElement).toHaveClass('w-8 h-8');
  });

  it('applies custom width and height classes', () => {
    const countryCode = 'IN';
    const mockUrl = 'https://flagcdn.com/w320/in.png';
    mockGetFlagUrl.mockReturnValue(mockUrl);

    render(<CountryFlag countryCode={countryCode} width="w-16" height="h-16" />);

    const imgElement = screen.getByRole('img', { name: `Flag of ${countryCode}` });
    expect(imgElement).toHaveClass('w-16 h-16');
  });

  it('handles invalid country codes gracefully', () => {
    const countryCode = '';
    const mockUrl = 'https://flagcdn.com/w320/.png';
    mockGetFlagUrl.mockReturnValue(mockUrl);
  
    render(<CountryFlag countryCode={countryCode} />);
  
    const imgElement = screen.getByRole('img', { name: 'Flag of Unknown' });
    expect(imgElement).toHaveAttribute('src', mockUrl);
    expect(imgElement).toBeInTheDocument();
  });
});
