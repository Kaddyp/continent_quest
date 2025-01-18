const getFlagUrl = (countryCode: string): string => {
    return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
};
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
        alt={`Flag of ${countryCode}`}
        className={`${width} ${height}`}
        />
    );
};
export default CountryFlag;