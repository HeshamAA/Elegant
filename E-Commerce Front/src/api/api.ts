import axios from "axios";

const Axi = axios.create({
  baseURL: "https://elegant-api-mu.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axi;
