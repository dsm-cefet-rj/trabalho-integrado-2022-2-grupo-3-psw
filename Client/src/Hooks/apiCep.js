import axios from "axios";

const apiCep = axios.create({
    baseURL: "http://localhost:3000",
})

export default apiCep;