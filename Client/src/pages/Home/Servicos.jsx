import React from "react";
import camaLuxo from "../../img/beautiful-luxury-hotel-bedroom.jpg";

function Servicos(){
    return(
        <div id="servicos" className="block">
            <div className="container">
              <h2 className="title text-center">Nossos serviços</h2>
              <h4 className="subtitleServicos text-center mb-4">
                Pensando nas especificidades de cada um!
              </h4>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
                  <a href="#" className="servico">
                    <div className="img-container mb-3">
                      <img src={camaLuxo} className="img-fluid" />
                    </div>
                    <h5 className="text-uppercase">Serviço 1</h5>
                    <p className="mb-0">
                      Descrição bem bacana do serviço 1
                    </p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
                  <a href="#" className="servico">
                    <div className="img-container mb-3">
                      <img src={camaLuxo} className="img-fluid" />
                    </div>
                    <h5 className="text-uppercase">Serviço 2</h5>
                    <p className="mb-0">
                      Descrição bem bacana do serviço 2
                    </p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
                  <a href="#" className="servico">
                    <div className="img-container mb-3">
                      <img src={camaLuxo} className="img-fluid" />
                    </div>
                    <h5 className="text-uppercase">Serviço 3</h5>
                    <p className="mb-0">
                      Descrição bem bacana do serviço 3
                    </p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
                  <a href="#" className="servico">
                    <div className="img-container mb-3">
                      <img src={camaLuxo} className="img-fluid" />
                    </div>
                    <h5 className="text-uppercase">Serviço 4</h5>
                    <p className="mb-0">
                      Descrição bem bacana do serviço 4
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Servicos;