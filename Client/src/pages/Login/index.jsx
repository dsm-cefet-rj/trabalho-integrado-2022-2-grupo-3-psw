import React from "react";
import "./styles.css";
import logo from "../../img/DeepSleepLogo.png";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import LoginFooter from "./LoginFooter";
import LoginInputs from "./LoginInputs";
import { Link } from 'react-router-dom';

function LoginPage () {
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