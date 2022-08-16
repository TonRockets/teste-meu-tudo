import axios from 'axios';

const url = 'https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test';

const baseURL = process.env.REACT_APP_API || url;
const http = axios.create({
  baseURL: baseURL
});

http.defaults.headers['content-type'] = 'application/json';
http.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
