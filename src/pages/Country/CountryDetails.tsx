import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import getSymbolFromCurrency from 'currency-symbol-map';
import CountryFlag from "../../components/CountryFlag";

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
              {/* <img
                src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                alt={`${country.name} flag`}
                className="w-8 h-8"
              /> */}
              <CountryFlag countryCode={country.code} width="w-8" height="h-8"/>
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
          >
            <button
              onClick={() => navigate(-1)}
              className="flex select-none items-center gap-2 rounded-lg py-2 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
              Go Back
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;