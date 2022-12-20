import create from "zustand";

const useQuiz = create((set, get) => ({
    resposta: "",

    setResposta: (res) => {
        set({resposta: res});    
    },

    desSetUser: () => {
        set({user: null, logoutAction: true});
    },
    
    setLogoutAction: () => {
        set({logoutAction: false});
    }

}));

export default useQuiz;