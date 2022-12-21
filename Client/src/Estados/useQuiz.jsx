import create from "zustand";

const useQuiz = create((set, get) => ({
    resposta1: "",
    resposta2: "",
    resposta3: "",
    estadoAtual: 1,

    setResposta1: (res) => {
        set({resposta1: res});    
    },
    setResposta2: (res) => {
        set({resposta2: res});    
    },
    setResposta3: (res) => {
        set({resposta3: res});    
    },

    setEstadoAtual: (estado) => {
        set({estadoAtual: estado});    
    },

    desSetUser: () => {
        set({user: null, logoutAction: true});
    },
    
    setLogoutAction: () => {
        set({logoutAction: false});
    }

}));

export default useQuiz;