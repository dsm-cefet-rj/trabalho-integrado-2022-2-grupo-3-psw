import React from "react";
import "./styles.css";
import logo from "../../img/DeepSleepLogo.png";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import RegisterFooter from "./RegisterFooter";
import RegisterInputs from "./RegisterInputs";
import { Link } from 'react-router-dom';

function RegisterPage () {
    return (
      <html lang="pt-br">
        <ImportaBootstrap/>

       <body id="skyBackground">
          <main>

            <div className="container-fluid" id="loginScreen">
               <div className="container" id="loginBox">
                  <div className="row" id="loginForm">
                      <img src={logo} className="col-12 img-fluid" style={{width: "34vw"}} alt="Logo Deep"/>
                      <div className="col-4 mx-5 my-4" style={{width: "91px"}}>
                        <Link to={"/login"}> 
                        <button className="btn btn-primary" style={{width: "91px"}}>Login</button>
                        </Link>
                      </div>
                      <div className="col-4 mx-5 my-4" style={{width: "91px"}}>
                        <Link to={"/register"}> 
                        <button className="btn btn-primary" style={{width: "91px"}}>Registrar</button>
                        </Link>
                      </div>
                      <RegisterInputs/>
                </div>
              </div>
            </div>

          </main>
      <RegisterFooter/>

       </body> 
      
      </html>
    );
}

export default RegisterPage;