// @ts-nocheck
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

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
interface ContinentsProps {
  continents: Array<{
    name: string;
  }>;
}
const Continents: React.FC = () => {
  const { loading, error, data } = useQuery<ContinentsProps>(CONTINENTS);
  const bold = 700;

  const isEurope = (c: string) => c === 'Europe';

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <h3 className={`font-${bold}`}>Continents:</h3>
      {data?.continents.map(({ name, index }) => (
        <div key={index} className={isEurope(name) ? 'text-red-800' : ''}>{name}</div>
      ))}
    </>
  );
};

export default Continents;