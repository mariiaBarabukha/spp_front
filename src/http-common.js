import axios from "axios";

//---Setup basic axios config
export default axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:9000/api',
  baseURL: 'https://localhost:9000/api',
  headers: {
    "Content-type": "application/json"
  }
});