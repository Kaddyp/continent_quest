const getFlagUrl = (countryCode: string): string => {
    return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
};
export default getFlagUrl;