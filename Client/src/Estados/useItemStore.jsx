import create from "zustand";

const useCartItem = create((set, get) => ({
    cartItens: [],
    quantityCartItens: 0,

    addCartItem: (item) => {
        const cart = get().cartItens;
        const findProduct = cart.find(produto=> produto._id === item._id);

        if (findProduct) {
            findProduct.quantidade += 1;
        } else {
            cart.push({...item, quantitdade: 1 });
        }
        set({ cart });
        set({quantityCartItens: cart.length})
    },
    // addCartItem: (item) => {
    //     set(state => ({cartItens: [...state.cartItens, item] }))
    // },

    removeCartItem: (itemId) => {
        set({cartItens: get().cartItens.filter(item => item._id !== itemId)});
        set({quantityCartItens: get().quantityCartItens - 1})
    },

    updateItemQuantity: (itemId, action) => {
        const cart = get().cartItens;
        const findProduct = cart.find(p => p._id === itemId);

        if(findProduct) {
            if (action === 'decrease') {
                findProduct.quantidade = findProduct.quantidade >= 1 ? findProduct.quantidade - 1 : findProduct.quantidade;
            } else {
                findProduct.quantidade += 1;
            }
        }
        set({cart});
    },

    removeAllItems: (id) => {
        set({cartItens: get().cartItens.filter(item => item._id == id)});
        set(state => ({quantityCartItens: state.quantityCartItens = 0}));


    }
}));


export default useCartItem;