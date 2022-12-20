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
    },
    getUserbyToken: async(token) => {
        const response = await api.post("/user/validate/" + token);
        return response.data;
    },
    favoriteActions: async(idUser, idProduct) => {
        const response = await api.patch(`/user/addToFavorites/${idUser}/${idProduct}`);
        return response.data;
    },
    getLocal: async (cep) => {
        const response = await api.get("/local/" + cep);
        return response.data;
    },
    addOrRemoveCartItem: async(userId, productId) => {
        const response = await api.patch(`/user/addToCart/${userId}/${productId}`);
        return response.data;
    },
    increaseItemQuantity: async(userId, productId) => {
        const response = await api.patch(`/user/increaseItemQuantity/${userId}/${productId}`);
        return response.data;
    },
    decreaseItemQuantity: async(userId, productId) => {
        const response = await api.patch(`/user/decreaseItemQuantity/${userId}/${productId}`);
        return response.data;
    }
})