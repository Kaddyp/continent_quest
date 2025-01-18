import getFlagUrl from './getFlagUrl';

describe('getFlagUrl', () => {
  it('should handle mixed-case country codes', () => {
    const countryCode = 'In';
    const expectedUrl = 'https://flagcdn.com/w320/in.png';
    expect(getFlagUrl(countryCode)).toBe(expectedUrl);
  });

  it('should handle empty input gracefully', () => {
    const countryCode = '';
    const expectedUrl = 'https://flagcdn.com/w320/.png';
    expect(getFlagUrl(countryCode)).toBe(expectedUrl);
  });
});
