import axios from '../plugins/axios';

export default class Api {
  static postUsers = async (data) => {
    const response = await axios.post('auth/signup', data);

    return response;
  };
  static getUser = async (data) => {
    const response = await axios.post('auth/login', data);
    return response;
  };
}
