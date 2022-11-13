function LoginInputs () {
    return (
        <form action="" method="post">
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" type="email" name="email" id="formEmail"
                placeholder="picole123@gmail.com"/>
            </div>
            <div className="col-12 container-fluid mb-4" id="formBox">
                <input className="formInput" type="password" name="password" id="formPassword"
                placeholder="Senha do Usuário"/>
            </div>
        </form>
    );
}

export default LoginInputs;