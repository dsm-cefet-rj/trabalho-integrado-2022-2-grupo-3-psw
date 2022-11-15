import { useState } from "react";
import PasswordInput from "./PasswordInput";

function RegisterInputs () {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");

    return (
        <form action="" method="post">
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" 
                onChange={e => setNome(e.target.value)}
                type="text" name="userName" id="formEmail"
                placeholder="Nome de usuário"/>
            </div>
            <div className="col-12 container-fluid mb-4"
                onChange={e => setEmail(e.target.value)} 
                id="formBox">
                <input class="formInput" type="email" name="email" id="formEmail"
                placeholder="Email"/>
            </div>
            <PasswordInput/>
            <div className="col-12 container" style={{width: "23vw", padding:"0"}}>
                <button type="submit" className="btn btn-danger" id="confirmButton">
                Confirmar</button>
            </div>
        </form>
    );
}

export default RegisterInputs;