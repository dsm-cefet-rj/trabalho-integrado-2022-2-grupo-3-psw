import create from "zustand";

const useOrderItem = create((set, get) => ({
    orderItemsList: [],
    totalValue: 0,

    addOrderItemValue: (valor) => {
        const orderItems = get().orderItemsList;
        orderItems.push(valor);

        set(state => ({totalValue: state.totalValue += valor}));
        set({orderItems});
    },

    removeOrderItemValue: (valor) => {
        const orderItems = get().orderItemsList;
        const index = orderItems.lastIndexOf(valor);

        set({orderItems: get().orderItemsList.splice(index, 1)});
        set(state => ({totalValue: state.totalValue -= valor}));
    },

    removeAllSameItems: (valor) => {
        set({orderItemsList: get().orderItemsList.filter(item => item !== valor)});
        
    },


}));

export default useOrderItem;