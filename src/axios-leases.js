import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hiring-task-api.herokuapp.com/v1/leases'
});

export default instance;