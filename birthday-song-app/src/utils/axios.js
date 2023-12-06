import axios from "axios";
// import {
//   SERVER_API_URL,
//   SERVER_CHAT_API_URL,
//   CUSTOMER_RESERVATION_API_URL,
//   SERVER_CALENDAR_API_URL,
// } from "src/constants/api";

const Axios = axios.create({
  //  baseURL: SERVER_API_URL,
});

export default Axios;
