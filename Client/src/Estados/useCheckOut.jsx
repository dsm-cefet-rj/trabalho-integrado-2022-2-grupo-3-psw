import create from "zustand";

const useCheckOut = create((set, get) => ({
    checkOutItems: [],

    addItemToCheckOut: (item) => {
        const checkOut = get().checkOutItems;
        checkOut.push(item);

        set({ checkOut });
    },

}));

export default useCheckOut;