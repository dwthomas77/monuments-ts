import mockApiRequest from './mockApiRequest';
import monumentsTestData from '../data/monuments_static_test.json';

export type MonumentType = {
  uid: string,
  city: string,
  state: string,
};

const monumentsService = async (): Promise<any> => {
  const monuments = await mockApiRequest({payload: monumentsTestData});
  return monuments;
}

export default monumentsService;