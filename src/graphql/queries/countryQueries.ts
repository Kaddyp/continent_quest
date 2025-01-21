import { gql } from '@apollo/client';

export const GET_ALL_COUNTRIES = gql`
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

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      awsRegion
      code
      capital
      emoji
      emojiU
      currency
      currencies
      native
      phone
      phones
      subdivisions {
        name
      }
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;