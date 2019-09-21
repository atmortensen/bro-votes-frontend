import axios from "axios";

export default () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: window.localStorage.getItem("token")
    }
  });

  instance.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      console.log(error.response.data.message);
      return error.response &&
        error.response.data &&
        error.response.data.message
        ? Promise.reject(error.response.data.message)
        : Promise.reject("Brooo! Looks like a server error... try again later");
    }
  );

  return instance;
};
