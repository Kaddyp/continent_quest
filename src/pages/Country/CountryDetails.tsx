import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import getSymbolFromCurrency from 'currency-symbol-map';

const GET_COUNTRY = gql`
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

const CountryDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const country = data.country;

  return (
    <div className="p-4">
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">
          Country Information
        </h3>
      </div>

      <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <div className="py-4 flex items-center">
            <span className="text-2xl p-2">
              Display Flag
            </span>
          </div>
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {country.name}
          </h5>

          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            <span className="font-semibold text-gray-700">Continent:</span>{" "}
            {country.continent.name}
          </p>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            <span className="font-semibold text-gray-700">Region:</span>{" "}
            {country.awsRegion}
          </p>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            <span className="font-semibold text-gray-700">Currency:</span>{" "}
            {country.currency}
            <span className="currency">({getSymbolFromCurrency(country.currency)})</span> 
          </p>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            <span className="font-semibold text-gray-700">Languages:</span>{" "}
            {country.languages.map((lang: any) => lang.name).join(", ")}
          </p>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            <span className="font-semibold text-gray-700">Phone Code:</span>{" "}
            +{country.phone} ({country.phones.join(', ')})
          </p>

          {/* Subdivisions */}
          {/* <div>
              <h3 className="font-semibold text-gray-700 mb-2">Subdivisions</h3>
              <div className="grid grid-cols-2 gap-2">
                {country.subdivisions && country.subdivisions.map((subdivision:any) => (
                  <span
                    key={subdivision.name}
                    className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-md shadow-sm"
                  >
                    {subdivision.name}
                  </span>
                ))}
              </div>
            </div> */}
        </div>
        <div className="p-6 pt-0">
          <a
            className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
            href="/"
          >Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
