import axios from "axios";

export const api = axios.create({
  baseURL: 'https://holistic-toothpaste-production.up.railway.app/'
})