import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export const useApi = () => ({
    calcularValorFrete: async (cep) => {
        const response = await api.post("/cep/" + cep)
        return response.data;
    },
    getProducts: async () => {
        const response = await api.get("/products");
        return response.data;
    },
})