import axios from 'axios';

export default axios.create({
  baseURL: '/api', // 修改为 /api
  timeout: 5000,
});