import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useApi } from "../../Hooks/useApi";

function LoginInputs() {
    const pswRGX = /^(?=.*\d).{5,12}/;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
    }

    useEffect(() => {
        const result = pswRGX.test(password);
        setValidPassword(result);
    }, [password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(useApi().autenticarUsuario({email, password}));
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
            <div className="col-12 container my-4" style={{ width: "23vw", padding: "0" }} id="registerText">
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