import React from "react";
import "./styles.css";
import logo from "../../img/DeepSleepLogo.png";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import LoginFooter from "./LoginFooter";
import Footer from "../../components/Footer";
import LoginInputs from "./LoginInputs";

function LoginPage () {
    return (
      <html lang="pt-br">
        <ImportaBootstrap/>

       <body id="skyBackground">
          <main>

            <div className="container-fluid" id="loginScreen">
               <div className="container" id="loginBox">
                  <div className="row" id="loginForm">
                      <img src={logo} className="col-12 img-fluid" style={{width: "33vw"}} alt="Logo Deep"/>
                      <button className="btn btn-primary col-12 mx-3 my-4">Login</button>
                      <button className="btn btn-primary col-12 mx-3 my-4">Registrar</button>
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