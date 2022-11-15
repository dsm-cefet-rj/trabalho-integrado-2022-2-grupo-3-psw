import create from "zustand";
import { itens } from "../pages/Catalogo/itens";

const useCartItem = create((set) => ({
    cartItens: [],

    addCartItem: (item) => {
        set(state => ({cartItens: [...state.cartItens, item] }))
    },

    removeCartItem: (itemId) => {
        set({cartItens: cartItens.filter(item => item.id !== itemId)})
    }

    // updateItemQuantity: (itemId, action) => {
    //     const findProduct = cartItens.find(p => p.id === itemId);

    //     if(findProduct) {
    //         if (action === 'decrease') {
    //             findProduct.quan
    //         }
    //     }
    // }
}));


export default useCartItem;