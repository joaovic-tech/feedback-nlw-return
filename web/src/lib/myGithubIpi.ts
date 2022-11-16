import axios from "axios";
const pathUser = 'https://api.github.com/users/joaovic-tech';

export const myGithubApi = axios.get(pathUser)
  .then(response => {
    return response.data
  })
  .catch(e => {
    return false
  })