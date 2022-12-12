import create from "zustand";

const useLogged = create((set, get) => ({
    loggedUser: [],

    login: (user) => {
        const login = get().loggedUser;

        login.push(user);

        set({ login });
    },
    
    logout: (user) => {
        const login = get().loggedUser;

        login.pop(user);

        set({ login });
    }
}));

export default useLogged;