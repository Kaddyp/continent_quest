import getFlagUrl from "../utils/getFlagUrl";
interface CountryFlagProps {
    countryCode: string;
    width?: string; 
    height?: string; 
  }
  
const CountryFlag: React.FC<CountryFlagProps> = ({ countryCode , width = "w-8", height = "h-8" }) => {
    
    const flagUrl = getFlagUrl(countryCode);
    return (
        <img
        src={flagUrl}
        alt={`Flag of ${countryCode || 'Unknown'}`}
        className={`${width} ${height}`}
        />
    );
};
export default CountryFlag;