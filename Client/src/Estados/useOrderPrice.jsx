import create from "zustand";

const useOrderItem = create((set, get) => ({
    orderItemsList: [],

    addOrderItemValue: (valor) => {
        const orderItems = get().orderItemsList;
        orderItems.push(valor);

        set({orderItems});
    },

    removeOrderItemValue: (valor) => {
        const orderItems = get().orderItemsList;
        const index = orderItems.lastIndexOf(valor);
        set({orderItems: get().orderItemsList.splice(index, 1)});
        set({orderItems});
    },

    showValue: () => {
        var soma = 0;
        const orderItems = get().orderItemsList;
        orderItems.array.forEach(valor => {
            soma += valor
            return soma;
        });
    },

    removeAllSameItems: (valor) => {
        set({orderItemsList: get().orderItemsList.filter(item => item !== valor)});
    }

}));

export default useOrderItem;