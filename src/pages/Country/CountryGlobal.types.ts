//Interface for Country component
export interface CountriesProps {
    countries: Array<{
        code: string;
        name: string;
        emoji: string;
        continent: {
          name: string
        }
      }>;
}

export interface Country {
  code: string;
  name: string;
  emoji: string;
  continent: {
    name: string;
  };
}