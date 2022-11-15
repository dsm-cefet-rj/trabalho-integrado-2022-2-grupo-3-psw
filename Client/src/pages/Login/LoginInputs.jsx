import React, {useState} from "react"
import { FiLock } from "react-icons/fi";

function LoginInputs () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
    }


    return (
        <form action="" method="post">
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" 
                onChange={e => setEmail(e.target.value)}
                type="email" name="email" id="formEmail"
                placeholder="picole123@gmail.com"/>
            </div>
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" 
                onChange={e => setPassword(e.target.value)}
                type={passwordShown ? "text" : "password"} 
                name="password" id="formPassword"
                placeholder= "Senha do Usuário"/>
            </div>
            <div className="col-6 container-fluid mb-3 d-flex justify-content-start">
            <button className="btn btn-secondary"
                onClick={togglePassword}>
                &#128064;</button>
            </div>
            <div className="col-12 container my-4" style={{width: "23vw", padding:"0"}}>
                <button type="submit" className="btn btn-danger" id="confirmButton">
                Confirmar</button>
            </div>
        </form>
    );
}

export default LoginInputs;