import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_PROD_ENDPOINT;

// export const setJwt = (jwt) => {
// 	axios.defaults.headers.common["X-Auth-Token"] = jwt;
// };

axios.interceptors.response.use(null, (err) => {
  const expectedError =
    err.response?.status >= 400 && err.response?.status < 500;
  if (!expectedError) {
    toast.error("Oops! An unexpected error occurred");
  }
  return Promise.reject(err);
});

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
