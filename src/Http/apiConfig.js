//criar arquivo apiConfig.js para configurar a api

import axios from "axios";

const api = axios.create({
  baseURL: "https://sporting-manager-api.onrender.com", // substituir pela URL da sua API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
