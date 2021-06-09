import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID nMdP55ITuTuOJNPuus_nUmhxAxYH0nv-I6btDImFHgY",
  },
});
