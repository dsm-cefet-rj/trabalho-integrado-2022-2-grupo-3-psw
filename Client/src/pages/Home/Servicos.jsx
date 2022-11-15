import React, { useState } from "react";
import camaLuxo from "../../img/beautiful-luxury-hotel-bedroom.jpg";
import dorLombarImg from "../../img/lombar.jpg"
import cabeloCacheadoImg from "../../img/cabeloCacheado.jpg"
import Button from 'react-bootstrap/Button';
import bruxismoImg from "../../img/bruxismo.jpg"
import estresseImg from "../../img/estresse.jpg"
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.tituloModal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{props.tituloCorpoModal}</h5>
        <p>
          {props.corpoModal}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Servicos() {
  const [modalShow, setModalShow] = React.useState(false);
  const [tituloModal, settituloModal] = useState("");
  const [corpoModal, setCorpoModal] = useState("");
  const [tituloCorpoModal, setTiTuloCorpoModal] = useState("");

  return (
    <div id="servicos" className="block">
      <div className="container">
        <h2 className="title text-center"> Alguns de nossos produtos</h2>
        <h4 className="subtitleServicos text-center mb-4">
          Pensando nas especificidades de cada um!
        </h4>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
            <Button style={{ backgroundColor: "inherit", border: "none" }} onClick={() => {
              setCorpoModal("A dor na lombar, que é a região mais baixa das costas, quase na divisa com os glúteos, é um dos problemas que mais atingem a população mundial. Não existe nada pior do que viver com dor, não é mesmo. Para esses casos, temos colchões como o de massagem, que é uma ótima forma de prevenir e reduzir esse tipo de desconforto. Tudo porque esse produto conta com a tecnologia de densidade progressiva, com camadas em diferentes densidades, o que deixa o corpo alinhado e muito mais confortável durante as horas de sono.");
              settituloModal("Dores na lombar");
              setTiTuloCorpoModal("Pra quem sente dores na região da lombar!");
              setModalShow(true)
              }}>
              <a className="servico">
                <div className="img-container mb-3">
                  <img src={dorLombarImg} className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Dores na lombar</h5>
              </a>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Button>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
          <Button style={{ backgroundColor: "inherit", border: "none" }} onClick={() => {
              setCorpoModal("Acredite se quiser, o responsável por desmanchar seus cachos durante a noite é o seu travesseiro! Como assim? O algodão das fronhas comuns rouba toda a umidade do cabelo e a fricção dos fios resulta naquele visual sem definição no dia seguinte. Quer uma solução imediata? Mude o tecido de suas fronhas! Diferente do algodão, a seda tem dificuldade para absorver a oleosidade do nosso cabelo, por exemplo. Além disso, ela não causa frizz, normalmente provocado pelo atrito do algodão com os fios, e ainda tem uma superfície escorregadia que não desfaz os cachos.");
              settituloModal("Cabelos Cacheados");
              setTiTuloCorpoModal("Pra quem tem cabelos cacheados!");
              setModalShow(true)
              }}>
              <a className="servico">
                <div className="img-container mb-3">
                  <img src={cabeloCacheadoImg} className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Cabelos cacheados</h5>
              </a>
            </Button>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
          <Button style={{ backgroundColor: "inherit", border: "none" }} onClick={() => {
              setCorpoModal("Bruxismo é o transtorno em que a pessoa aperta, desliza ou bate os dentes, principalmente durante o sono. Temos sprays ótimos para quem sofre de bruxismo, auxiliando também na conexão com os sonhos, combate à depressão e insônia. Além de óleos essenciais, tintura de artemisa, considerada a planta dos sonhos, cristal de ametista, que ajuda no equilíbrio e proteção, e florais de Bach, que tratam por meio da energia das flores.");
              settituloModal("Bruxismo");
              setTiTuloCorpoModal("Pra quem tem bruxismo!");
              setModalShow(true)
              }}>
              <a className="servico">
                <div className="img-container mb-3">
                  <img src={bruxismoImg} className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Bruxismo</h5>
              </a>
            </Button>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
          <Button style={{ backgroundColor: "inherit", border: "none" }} onClick={() => {
            setCorpoModal("Você já ouviu falar sobre o Cobertor Pesado, também conhecido como Cobertor Ponderado (Weighted Blanket)? Eles são amplamente usados em alguns países como a Suécia, Inglaterra e Estados Unidos como terapia  para tratar aquelas pessoas que sofrem de ansiedade, estresse e principalmente para aquelas que apresentam comportamentais relacionados ao autismo. Aqui você encontra eles e muito mais!");
              settituloModal("Estresse");
              setTiTuloCorpoModal("Pra quem tem estresse!");
              setModalShow(true)
              }}>
              <a className="servico">
                <div className="img-container mb-3">
                  <img src={estresseImg} className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Estresse</h5>
              </a>
            </Button>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        tituloModal = {tituloModal}
        corpoModal = {corpoModal}
        tituloCorpoModal = {tituloCorpoModal}
      />
    </div>
  )
}

export default Servicos;