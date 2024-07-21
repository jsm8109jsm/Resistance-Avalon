import axios from "axios";

export const apiClient = axios.create({
  baseURL:
    "https://3000-jsm8109jsm-registanceav-ljq6zoucrvp.ws-us115.gitpod.io/api",
  withCredentials: true,
  // headers: {
  //   "Access-Control-Allow-Credentials": "true",
  // },
});
