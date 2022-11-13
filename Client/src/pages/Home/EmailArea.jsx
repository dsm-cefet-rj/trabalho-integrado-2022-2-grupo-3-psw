import React from "react";
import emailImagem from "../../img/Emails-amico.svg";

import {AiOutlineFacebook} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";

import "./styles.css";

function EmailArea(){
    return (
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
                  <AiOutlineFacebook size={25} id="redesIcons"/>
                </a>
                <a href="#">
                    <AiOutlineTwitter size={25} id="redesIcons"/>
                </a>
                <a href="#">
                  <AiOutlineInstagram size={25} id="redesIcons"/>
                </a>
                <a href="#">
                  <AiOutlineLinkedin size={25} id="redesIcons"/>
                </a>
              </div>
            </div>
          </div>
    )
}

export default EmailArea;