import axios from "axios";
import { logout } from "../redux/features/authSlice";
import { store } from "../redux/store";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2000",
});

axiosInstance.interceptors.request.use((req) => {
  const auth_token = localStorage.getItem("auth_token");

  // console.log(auth_token)

  if (auth_token) {
    req.headers.authorization = `Bearer ${auth_token}`;
  }

  return req;
});

axiosInstance.interceptors.response.use(
  (resSuccess) => {
    return resSuccess;
  },
  (resError) => {
    // if (resError.response.status === 401) {
    //   localStorage.removeItem("auth_token");
    //   store.dispatch(logout());
    // }

    return Promise.reject(resError);
  }
);

export { axiosInstance };
