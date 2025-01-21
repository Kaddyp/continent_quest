
import React from 'react'; 
import { Link } from 'react-router-dom';
import CountryFlag from '../../components/CountryFlag';
// Types Interface
import { Country } from './CountryGlobal.types';

const CountryCard = React.memo(({ country }: { country: Country }) => (
    <Link to={`/country/${country.code}`} key={country.code}>
      <div className="border p-4 flex items-center">
        <span className="rounded-full border border-gray-300 text-2xl p-2">
          <CountryFlag countryCode={country.code} width="w-4" height="h-4" />
        </span>
        <div className="ml-12">
          <h3 className="font-bold italic">{country.name}</h3>
          <p className="italic">{country.continent.name}</p>
        </div>
      </div>
    </Link>
));
  
export default CountryCard;