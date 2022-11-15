import create from "zustand";
import { itens } from "../pages/Catalogo/itens";

const useCartItem = create((set, get) => ({
    cartItens: [],

    addCartItem: (item) => {
        const cart = get().cartItens;
        const findProduct = cart.find(produto=> produto.id === item.id);

        if (findProduct) {
            findProduct.quantidade += 1;
        } else {
            cart.push({...item, quantitdade: 1 });
        }
        set({ cart });
    },
    // addCartItem: (item) => {
    //     set(state => ({cartItens: [...state.cartItens, item] }))
    // },

    removeCartItem: (itemId) => {
        set({cartItens: get().cartItens.filter(item => item.id !== itemId)});
    },

    updateItemQuantity: (itemId, action) => {
        const cart = get().cartItens;
        const findProduct = cart.find(p => p.id === itemId);

        if(findProduct) {
            if (action === 'decrease') {
                findProduct.quantidade = findProduct.quantidade >= 1 ? findProduct.quantidade - 1 : findProduct.quantidade;
            } else {
                findProduct.quantidade += 1;
            }
        }
        set({cart});
    }
}));


export default useCartItem;