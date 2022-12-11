import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react"
import PasswordChecklist from "react-password-checklist"
import './styles.css'
import { AiOutlineEyeInvisible} from "react-icons/ai";
import { AiOutlineEye} from "react-icons/ai";
import { useApi } from "../../Hooks/useApi";


function RegisterInputs () {
    const pswRGX = /^(?=.*\d).{5,12}/;
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
	const [passwordAgain, setPasswordAgain] = useState("");
    const [validPasswordAgain, setValidPasswordAgain] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
    }

    useEffect(() => {
        const result = pswRGX.test(password);
        setValidPassword(result);
        const match = password === passwordAgain;
        setValidPasswordAgain(match);
    },[password, passwordAgain])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(useApi().registerUser({nome, email, password}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" 
                onChange={e => setNome(e.target.value)}
                type="text" name="userName" id="formNome"
                placeholder="Nome de usuário"
                required/>
            </div>
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" 
                onChange={e => setEmail(e.target.value)}
                type="email" name="email" id="formEmail"
                placeholder="Email"
                required/>
            </div>
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" 
                type={passwordShown ? "text" : "password"}
                onChange={e => setPassword(e.target.value)}
                aria-invalid={!validPassword}
                name="password" id="formPassword"
                placeholder="Senha"
                required
                pattern="(?=.*\d).{5,12}"/>
                 <button className="btnEye" onClick={togglePassword}>
                    { passwordShown ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20}/>
                    }
                </button>
            </div>
            <div className="col-12 container-fluid mb-3" id="formBox">
                <input className="formInput" 
                type={passwordShown ? "text" : "password"} 
                onChange={e => setPasswordAgain(e.target.value)}
                aria-invalid={!validPasswordAgain}
                name="password" id="formConfirmPassword"
                placeholder="Confirmar Senha"
                required
                pattern="(?=.*\d).{5,12}"/>
                 <button className="btnEye" onClick={togglePassword}>
                    { passwordShown ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20}/>
                    }
                </button>
            </div>   

            <div className="col-6 container-fluid mb-3 d-flex justify-content-start passwordCheckList">
                <PasswordChecklist
				rules = {["minLength", "maxLength", "number", "match"]}
				minLength = {5}
                maxLength = {12}
				value = {password}
				valueAgain = {passwordAgain}
                messages = {{
                    maxLength: "Máximo de 12 caracteres.",
                    minLength: "Mínimo de 5 caracteres.",
                    number: "Conter ao menos 1 número.",
                    match: "Senhas estão iguais."
                }}
				onChange = {(isValid) => {}}
                />
            </div>
            <div className="col-12 container" style={{width: "23vw", padding:"0"}} id="haveAccountText">
                <button disabled={!validPassword || !validPasswordAgain || !email || !nome ? true : false}
                className="btn btn-danger" id="confirmButton">Confirmar</button>
                <p className="mt-3">Já possui conta?
                <Link to={"/login"}><button className="btn btn-link p-1">Clique aqui</button></Link> 
                </p> 
            </div>
        </form>
    );
}

export default RegisterInputs;