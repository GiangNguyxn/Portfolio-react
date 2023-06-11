import axios from "axios";

const intance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default intance;
