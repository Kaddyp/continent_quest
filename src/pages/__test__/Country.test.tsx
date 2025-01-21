import React from 'react';
import { render, screen } from '@testing-library/react';
import Country from '../Country/Country'; 
import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';

const GET_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      code
      name
      emoji 
      continent {
        name
      }
    }
  }
`;

const mockData = {
  countries: [{
    code: 'GB',
    name: 'United Kingdom',
    emoji: '🇬🇧',
    continent: {
      name: 'Europe',
    },
  }],
};

// Mock responses
const mocks = [
  {
    request: { query: GET_ALL_COUNTRIES },
    result: { data: mockData },
  },
];

test('renders loading text', () => {
  render(
    <MockedProvider mocks={[]}>
      <Country />
    </MockedProvider>
  );

});