import create from "zustand";

const useLogged = create((set, get) => ({
    loggedUser: [],

    logIn: (user) => {
        const login = get().loggedUser;

        login.push(user);

        set({ login });
    },
    
    logOut: (user) => {
        const login = get().loggedUser;

        login.pop(user);

        set({ login });
    }
}));

export default useLogged;