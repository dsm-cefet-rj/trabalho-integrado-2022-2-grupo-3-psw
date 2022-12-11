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
    getQuizReco: async (id) => {
        const response = await api.get("/quizRecomendacao/" + id);
        return response.data;
    },
    registerUser: async (user) => {
        const response = await api.post("/user", user);
        return response.data;
    },
    authUser: async (user) => {
        const response = await api.post("/user/auth", user);
        return response.data;
    },
    getFilteredProducts: async (filter) => {
        const response = await api.get("/products/filter/" + filter);
        return response.data;
    },
    getProductById: async (id) => {
        const response = await api.get("/products/" + id);
        return response.data;
    }
})