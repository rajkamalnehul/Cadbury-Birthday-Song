import axios from "axios";
const SERVER_API_URL = "https://api.openai.com/v1/";
const Axios = axios.create({
  baseURL: SERVER_API_URL,
});

export default Axios;
