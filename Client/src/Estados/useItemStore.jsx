import create from "zustand";
import { itens } from "../pages/Catalogo/itens";

const useCartItem = create((set, get) => ({
    cartItens: [],

    addCartItem: (item) => {
        set(state => ({cartItens: [...state.cartItens, item] }))
    },

    removeCartItem: (itemId) => {
        set({cartItens: get().cartItens.filter(item => item.id !== itemId)});
    },

    updateItemQuantity: (itemId, action) => {
        const cart = get().cartItens;
        const findProduct = cart.find(p => p.id === itemId);

        if(findProduct) {
            if (action === 'decrease') {
                findProduct.quantity = findProduct.quantity >= 1 ? findProduct.quantity - 1 : findProduct.quantity;
            } else {
                findProduct.quantity += 1;
            }
        }
        set({cart});
    }
}));


export default useCartItem;