import create from "zustand";

const useOrderItem = create((set, get) => ({
    // orderItemsList: [],
    totalValue: 0,

    addOrderItemValue: (valor) => {
        // const orderItems = get().orderItemsList;
        // orderItems.push(valor);

        set(state => ({totalValue: state.totalValue += valor}));
        // set({orderItems});
    },

    removeOrderItemValue: (valor) => {
        // const orderItems = get().orderItemsList;
        // const index = orderItems.lastIndexOf(valor);
        const totalValue2 = get().totalValue;

        // set({orderItems: get().orderItemsList.splice(index, 1)});
        if (totalValue2 > 0) {
            set(state => ({totalValue: state.totalValue -= valor}));
        }

    },

    removeAllSameItems: (valor, qtd) => {
        // const orderItems = get().orderItemsList;

        // set({orderItems: orderItems.filter(item => item !== valor)});
        set(state => ({totalValue: state.totalValue -= valor*qtd}));
    },

    resetTotalValue: () => {
        set(state => ({totalValue: state.totalValue = 0}));
    }


}));

export default useOrderItem;