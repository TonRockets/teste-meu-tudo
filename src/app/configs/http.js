import axios from 'axios';

const baseURL =
  process.env.REACT_APP_API ||
  'https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test';

const http = axios.create({
  baseURL: baseURL,
});

// if (getToken()) {
//     http.defaults.headers["Authorization"] = `bearer ${getToken()}`;
//   }

http.defaults.headers['content-type'] = 'application/json';

http.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
