import axios from '../plugins/axios';

export default class Api {
  static postUsers = async (data) => {
    console.log('Am in the Api');
    const response = await axios.post('auth/signup', data);

    return response;
  };
}
