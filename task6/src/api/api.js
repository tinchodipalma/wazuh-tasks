import axios from 'axios';
import { API_BASE_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const COMPANY_ID_MOCK = '5ed987147f0d5400013bbb16';

class API {
  static async _listEndpoint(
    endpoint,
    { search = '', limit = 10, page = 1, sort = '-_id' }
  ) {
    return axiosInstance.get(
      `${endpoint}?search=${search}&limit=${limit}&page=${page}&sort=${sort}`
    );
  }

  static async listBrands({ search = '', limit = 5, page = 1, sort = '-_id' }) {
    const { data } = await API._listEndpoint(`/brands`, {
      search,
      limit,
      page,
      sort,
    });
    return data;
  }

  static async listVehicles({
    search = '',
    limit = 5,
    page = 1,
    sort = '-_id',
  }) {
    const { data } = await API._listEndpoint(
      `/company/${COMPANY_ID_MOCK}/vehicles`,
      {
        search,
        limit,
        page,
        sort,
      }
    );
    return data;
  }
}

export default API;
