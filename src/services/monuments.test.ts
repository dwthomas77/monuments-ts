import monumentsService, { MonumentType } from './monuments';

describe('Monuments Service Tests', () => {
  it('returns an array with the correct objects', async () => {
    const monuments = await monumentsService();
    expect(Array.isArray(monuments)).toBe(true);
    expect(monuments.find((monument: MonumentType) => monument.uid === 'a1').city).toEqual('Boston');
  });
});