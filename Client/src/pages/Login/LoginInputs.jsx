import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useApi } from "../../Hooks/useApi";
import useUser from "../../Estados/useUser";

function LoginInputs() {
    const pswRGX = /^(?=.*\d).{5,12}/;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
   
    const setUser = useUser(state => state.setUser);
    const navigate = useNavigate(); 

    useEffect(() => {
        const result = pswRGX.test(password);
        setValidPassword(result);
    }, [password])

    const setToken = (token) => {
        localStorage.setItem("authToken",token);
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        await useApi().authUser({email, password}).then((response) => {
            if(response.success){
                setToken(response.token);
                setUser(response.user);
                console.log(response.user)
                navigate("/");
            }
        })
    }

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
        console.log(userEmail, userName);
        console.log(user);
        console.log(currentUser);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput"
                    onChange={e => setEmail(e.target.value)}
                    type="email" name="email" id="formEmail"
                    placeholder="picole123@gmail.com"
                    required />
            </div>
            <div className="col-12 container-fluid mb-5" id="formBox">
                <input className="formInput"
                    onChange={e => setPassword(e.target.value)}
                    type={passwordShown ? "text" : "password"}
                    aria-invalid={!validPassword}
                    name="password" id="formPassword"
                    placeholder="Senha do Usuário"
                    required
                    pattern="(?=.*\d).{5,12}" />
                <button className="btnEye" onClick={togglePassword}>
                    {passwordShown ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />
                    }
                </button>
            </div>
            <div className="col-12 container mt-4 mb-3" style={{ width: "23vw", padding: "0" }} id="registerText">
                <button disabled={!validPassword || !email ? true : false}
                    className="btn btn-danger" id="confirmButton">Confirmar</button>
                <p className="mt-3">Não é registrado?
                    <Link to={"/register"}><button className="btn btn-link p-1">Clique aqui</button></Link>
                </p>
            </div>
        </form>
    );
}

export default LoginInputs;