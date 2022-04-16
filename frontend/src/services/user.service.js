import axios from "axios";
import authHeader from "./auth-header";
const API_URL = process.env.REACT_APP_API_URL ?? "http://localhost:4001/";
// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };
const updateProfile = (data) => {
  let config = {
    headers : authHeader()
  }
  return axios.post(API_URL +'api/v1/users/update-profile',data, config)
  .then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};
export const userService = {

    updateProfile,
}
