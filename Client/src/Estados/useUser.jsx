import create from "zustand";

const useUser = create((set, get) => ({
    user: null,
    logoutAction: false,

    setUser: (user) => {
        set({user: user, logoutAction: false});
        
    },

    desSetUser: () => {
        set({user: null, logoutAction: true});
    },
    
    setLogoutAction: () => {
        set({logoutAction: false});
    }

}));

export default useUser;