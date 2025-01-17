// @ts-nocheck
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

type ContinenntsComponent = () => JSX.Element;

const Continents: ContinenntsComponent = () => {
  const CONTINENTS = gql`
    query Continents {
      continents {
          code,
          name,
          countries {
            capital
            currency
          }
      }
    }
  `;

  interface ContinentsQuery {
    continents: Array<{
      name: string;
    }>;
  }

  const { loading, error, data } = useQuery<ContinentsQuery>(CONTINENTS);

  const bold = 700;

  //const isEurope = (c) => (c !== 'Europe' ? false : true);
  const isEurope = (c: string) => c === 'Europe';

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h3 className={`font-${bold}`}>Continents:</h3>
      {data?.continents.map(({ name }) => (
        <div className={isEurope(name) ? 'text-red-800' : ''}>{name}</div>
      ))}
    </div>
  );
};

export default Continents;