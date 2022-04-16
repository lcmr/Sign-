import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL ?? "http://localhost:4001/";
const singup = (data) => {
  return axios.post(API_URL +'api/v1/users/signup',data)
  .then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};
const login = (email, password) => {
  return axios
    .post(API_URL +'api/v1/users/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
};
const logout = () => {
  localStorage.removeItem("user");
};



export const authService  = {
    singup,
    login,
    logout,
}