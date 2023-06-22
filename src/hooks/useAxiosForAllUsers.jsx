import axios from "axios";
import { useEffect } from "react";

const publicAxios = axios.create({
  baseURL: "https://harmony-academy-server.vercel.app",
});

const useAxiosForAllUsers = () => {
  useEffect(() => {
    publicAxios.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    publicAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        return Promise.reject(error);
      }
    );
  }, []);
  return [publicAxios];
};

export default useAxiosForAllUsers;
