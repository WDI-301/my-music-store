import axios from "axios";

const ApiAxios = axios.create({
  baseURL: 'http://localhost:5100/',
  withCredentials: true,
});

export default ApiAxios;