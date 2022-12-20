import React from "react";
import "./styles.css";
import logo from "../../img/DeepSleepLogo.png";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import LoginFooter from "./LoginFooter";
import LoginInputs from "./LoginInputs";
import { useNavigate } from 'react-router-dom';

function LoginPage () {
    const navigate = useNavigate();

    const sendToHomePage = () => {
      navigate("/");
    }

    return (
      <html lang="pt-br">
        <ImportaBootstrap/>

       <body id="skyBackground">
          <main>

            <div className="container-fluid" id="loginScreen">
               <div className="container" id="loginBox">
                  <div className="row" id="loginForm">
                      <img src={logo} className="col-12 img-fluid" style={{width: "35vw"}} alt="Logo Deep"/>
                      <LoginInputs/>
                      <div className="col-12 container" style={{ width: "23vw", padding: "0" }}>
                        <button onClick={sendToHomePage}
                        className="btn btn-danger" id="noLoginButton">Continuar Sem Login</button>
                      </div>
                </div>
              </div>
            </div>

          </main>
          <LoginFooter/>

       </body> 
      
      
      </html>
    );
}

export default LoginPage;