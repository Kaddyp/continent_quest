import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Continents from './Continents';
import { gql } from '@apollo/client';

// Mock GraphQL query
const CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
      countries {
        capital
        currency
      }
    }
  }
`;

// Mock data
const mockData = {
  continents: [
    { name: 'Europe' },
    { name: 'Asia' },
    { name: 'Africa' },
  ],
};

// Mock responses
const mocks = [
  {
    request: { query: CONTINENTS },
    result: { data: mockData },
  },
];

describe('Continents Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Suppress Apollo error logs
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore console.error after each test
  });

  it('renders error state on query failure', async () => {
    const errorMocks = [
      {
        request: { query: CONTINENTS },
        error: new Error('Something went wrong!'),
      },
    ];
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <Continents />
      </MockedProvider>
    );

    // Wait for the error message
    const errorMessage = await screen.findByText(/Error: Something went wrong!/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders continents when data is loaded', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Continents />
      </MockedProvider>
    );

    // Wait for the data to load
    const continentNames = await screen.findAllByText(/Europe|Asia|Africa/i);
    expect(continentNames).toHaveLength(3);

    // Specific check for a class (optional, based on your component's implementation)
    expect(screen.getByText('Europe')).toHaveClass('text-red-800');
  });
});
