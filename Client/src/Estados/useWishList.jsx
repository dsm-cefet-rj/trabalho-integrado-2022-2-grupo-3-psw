import create from "zustand";
import { itens } from "../pages/Catalogo/itens";

const useWishList = create((set, get) => ({
    wishList: [],

    addWishListItem: (item) => {
        const wishListItens = get().wishList;
        const findProduct = wishListItens.find(produto=> produto.id === item.id);

        if (findProduct) {
            findProduct.quantidade += 1;
        } else {
            wishListItens .push({...item, quantitdade: 1 });
        }
        set({ wishListItens });
    },

    removeWishListItem: (itemId) => {
        set({wishList: get().wishList.filter(item => item.id !== itemId)});
    },

}));

export default useWishList;