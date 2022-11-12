import React from "react";
import "./styles.css"

import logo from "../../img/DeepSleepLogo.png";
import camaLuxo from "../../img/beautiful-luxury-hotel-bedroom.jpg";
import camaLuxo2 from "../../img/folded-towels-on-the-bed.jpg";
import emailImagem from "../../img/Emails-amico.svg";

import {RiAccountCircleLine} from "react-icons/ri";
import {AiOutlineShoppingCart} from "react-icons/ai";

import Footer from "../../components/Footer";


function Home() {
  return (
<<<<<<< Updated upstream
    <p>Home</p>
    
=======
    <html lang="pt-br">

      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../../img/DeepSleepIcon.ico" />

        <title>Deep Sleep</title>


        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        <link rel="stylesheet" href="./styles.css" />


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
          crossorigin="anonymous" />


        <script src="https://kit.fontawesome.com/558a1f723c.js" crossorigin="anonymous" />

      </head>

      <body>

        <header>
          <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
            <div class="container-fluid">
              <a class="navbar-brand" href="index.html">
                <img id="logo" src={logo} class="img-fluid" alt="Logo Deep Sleep" />
              </a>Deep Sleep
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse text-center justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" id="navbarLinks" aria-current="page" href="#">Início</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="navbarLinks" href="#servicos">Serviços</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="navbarLinks" href="#contato">Contato</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" id="navbarInputSearch" type="search" placeholder="Pesquisar..."
                    aria-label="Search" />
                  <button class="btn btn-outline-success" id="navbarSearchButton" type="submit">Pesquisar</button>
                </form>
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a href="#" id="navbarIcons"><RiAccountCircleLine size={25}/></a>
                  </li>
                  <li class="nav-item">
                    <a href="../carrinho/index.html" id="navbarIcons"><AiOutlineShoppingCart size={25}/></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </header>

        <main>


          <div class="container-fluid">
            <div id="aboutArea">
              <div class="container">
                <div class="row">
                  <div class="col-md-6 col-sm-12" id="sobreEsquerdo">
                    <h3 class="aboutTitle">O produto certo para você</h3>
                    <h1>O que fazemos?</h1>
                    <p> O Deep Sleep indica um artigo de sono que leva em consideração suas preferências de sono. Combinaremos
                      com você o artigo perfeito com base no tamanho do seu corpo, hábitos de sono e estilo de vida para
                      ajudá-lo adormecer mais rápido e dormir melhor.</p>
                    <a href="../quizInicialReco/index.html" class="text-decoration-none"><button type="button" class="btn btn-primary" id="botoesSobreQuiz">Fazer Quiz</button></a>
                    <a href="../catalogo/index.html" class="text-decoration-none"><button type="button" class="btn btn-primary" id="botoesSobreCatalogo">Ir para o catálogo</button></a>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <img class="img-fluid" src={camaLuxo2} alt="Cama de Luxo" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="servicos" class="block">
            <div class="container">
              <h2 class="title text-center">Nossos serviços</h2>
              <h4 class="subtitleServicos text-center mb-4">
                Pensando nas especificidades de cada um!
              </h4>
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
                  <a href="#" class="servico">
                    <div class="img-container mb-3">
                      <img src={camaLuxo} class="img-fluid" />
                    </div>
                    <h5 class="text-uppercase">Serviço 1</h5>
                    <p class="mb-0">
                      Descrição bem bacana do serviço 1
                    </p>
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
                  <a href="#" class="servico">
                    <div class="img-container mb-3">
                      <img src={camaLuxo} class="img-fluid" />
                    </div>
                    <h5 class="text-uppercase">Serviço 2</h5>
                    <p class="mb-0">
                      Descrição bem bacana do serviço 2
                    </p>
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
                  <a href="#" class="servico">
                    <div class="img-container mb-3">
                      <img src={camaLuxo} class="img-fluid" />
                    </div>
                    <h5 class="text-uppercase">Serviço 3</h5>
                    <p class="mb-0">
                      Descrição bem bacana do serviço 3
                    </p>
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4">
                  <a href="#" class="servico">
                    <div class="img-container mb-3">
                      <img src={camaLuxo} class="img-fluid" />
                    </div>
                    <h5 class="text-uppercase">Serviço 4</h5>
                    <p class="mb-0">
                      Descrição bem bacana do serviço 4
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </main>

        <footer>
          <div class="container pt-2 pb-2" id="contato">
            <div class="row d-flex align-items-center">
              <div class="col-md-6 col-sm-6">
                <img src={emailImagem} />
              </div>
              <div class="col-md-6 col-sm-6" id="areaEmail">
                <h2 class="text-center" id="tituloContato">Fique por dentro das novidades</h2>
                <h4 class="mb-4 text-center" id="subtituloContato">Receba mensalmente alertas de promoções e ofertas!</h4>
                <form>
                  <div class="mb-2">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" class="form-control w100" id="emailInput" placeholder="Seu email..." />
                  </div>
                  <div>
                    <button type="submit" class="btn btn-light button mb-3 d-md-inline d-block w-100" id="botaoContato">
                      Cadastre-se
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-12 d-flex justify-content-center">
                <a href="#">
                  <i class="fa-brands fa-facebook" id="redesIcons"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter" id="redesIcons"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram" id="redesIcons"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin" id="redesIcons"></i>
                </a>
              </div>
            </div>
          </div>

          <emailArea/>

          <Footer/>

        </footer>
      </body>

    </html>
>>>>>>> Stashed changes
  )
}

export default Home;
