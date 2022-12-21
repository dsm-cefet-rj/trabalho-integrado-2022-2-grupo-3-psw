import React from "react";
import LoginPage from "../pages/Login";
import useUser from "../Estados/useUser";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const user = useUser(state => state.user);
    const logoutAction = useUser(state => state.logoutAction);
    const setLogoutAction = useUser(state => state.setLogoutAction);
    const navigate = useNavigate();

    if(!user && logoutAction){
        setLogoutAction();
        return navigate("/");
    }
    else if (!user){
        return <LoginPage/>
    }

    return children;
}

export default RequireAuth;