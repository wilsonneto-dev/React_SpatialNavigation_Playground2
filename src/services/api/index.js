import axios from "axios";

const api = axios.create({
  baseURL: "https://service-ios.ottvs.com.br/XB1Store/IOSService.svc",
});

export default api;
