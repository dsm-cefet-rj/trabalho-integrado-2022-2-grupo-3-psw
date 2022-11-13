import React from "react";
import emailImagem from "../../img/Emails-amico.svg";

function areaEmail(){
    return(
        <div className="container pt-2 pb-2" id="contato">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-sm-6">
            <img src={emailImagem} />
          </div>
          <div className="col-md-6 col-sm-6" id="areaEmail">
            <h2 className="text-center" id="tituloContato">Fique por dentro das novidades</h2>
            <h4 className="mb-4 text-center" id="subtituloContato">Receba mensalmente alertas de promoções e ofertas!</h4>
            <form>
              <div className="mb-2">
                <label for="email" className="sr-only">Email</label>
                <input type="email" className="form-control w100" id="emailInput" placeholder="Seu email..." />
              </div>
              <div>
                <button type="submit" className="btn btn-light button mb-3 d-md-inline d-block w-100" id="botaoContato">
                  Cadastre-se
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <a href="#">
              <i className="fa-brands fa-facebook" id="redesIcons"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter" id="redesIcons"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" id="redesIcons"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin" id="redesIcons"></i>
            </a>
          </div>
        </div>
      </div>
    )
}

export default areaEmail;