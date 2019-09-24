import axios from 'axios';

export default axios.create({
  baseURL: 'https://the-green-mile.herokuapp.com/api/v1/'
});
