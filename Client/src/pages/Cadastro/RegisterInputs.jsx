import PasswordInput from "./PasswordInput";

function RegisterInputs () {
    return (
        <form action="" method="post">
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" type="text" name="userName" id="formEmail"
                placeholder="Nome de usuário"/>
            </div>
            <div className="col-12 container-fluid mb-4" id="formBox">
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