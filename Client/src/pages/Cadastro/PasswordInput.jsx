import React, {useState} from "react"
import PasswordChecklist from "react-password-checklist"
import './styles.css'

function PasswordInput ()  {
	const [password, setPassword] = useState("");
	const [passwordAgain, setPasswordAgain] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
    }

	return (
        <>
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" 
                type={passwordShown ? "text" : "password"}
                onChange={e => setPassword(e.target.value)} 
                name="password" id="formPassword"
                placeholder="Senha"
                required
                pattern="(?=.*\d).{5,12}"/>
            </div>
            <div className="col-12 container-fluid mb-3" id="formBox">
                <input className="formInput" 
                type={passwordShown ? "text" : "password"} 
                onChange={e => setPasswordAgain(e.target.value)}
                name="password" id="formPassword"
                placeholder="Confirmar Senha"
                required
                pattern="(?=.*\d).{5,12}"/>
            </div>   

            <div className="col-6 container-fluid mb-3 d-flex justify-content-start passwordCheckList">
                <PasswordChecklist
				rules = {["minLength", "number", "match"]}
				minLength = {5}
				value = {password}
				valueAgain = {passwordAgain}
                messages = {{
                    minLength: "Mínimo de 5 caracteres.",
                    number: "Conter ao menos 1 número.",
                    match: "Senhas estão iguais."
                }}
				onChange = {(isValid) => {}}
                />
            </div>
            <div className="col-6 container-fluid mb-3 d-flex justify-content-start passwordCheckList" >
                <button className="btn btn-secondary"
                onClick={togglePassword}>
                &#128064;</button>
            </div>
        </>    
	)
}

export default PasswordInput;