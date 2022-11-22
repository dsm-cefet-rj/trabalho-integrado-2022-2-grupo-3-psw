import React, { useEffect, useState } from "react";
import Teste from "../../components/ImportsBootStrap";
import NavbarComp from "../../components/NavbarComp";
import CarroselCatalogo from "./CarroselCatalogo";
import CardsCatalogo from "./CardsCatalogo";
import styles from "./styles.css";
import Pagination from "./pagination";
import CatalogoItens from "./catalogoItens";
import DropdownButton from 'react-bootstrap/DropdownButton';



import ImagemGato from "../../img/gato.jpg";
import ImagemFronha from "../../img/fronha-de-seda-02.jpg";
import ColchaoEsquenta from "../../img/colchaoQueEsquenta.png";
import Footer from "../../components/Footer";

import { itens } from "./itens";
import { Button } from "react-bootstrap";


function Catalogo() {

    const [itensC, setItensC] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itensPerPage] = useState(16);
    const [busca, setBusca] = useState("");
    const [selectValue, setSelectValue] = useState("");

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setItensC(itens);
    }, [])

    const indexOfLastItem = currentPage * itensPerPage;
    const indexOfFirstItem = indexOfLastItem - itensPerPage;

    const filteredItens = itensC.filter(item => item.nome.toLowerCase().includes(busca.toLowerCase()))


    const currentItens = filteredItens.slice(indexOfFirstItem, indexOfLastItem);



    return (
        <div>
            <Teste />
            <NavbarComp />

            <CarroselCatalogo />

            <div className="container mb-0 mt-0">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <form className="justify-content-center justify-content-md-start mb-1 mb-md-0">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" placeholder="O que procura..." value={busca} onChange={(e) => setBusca(e.target.value)} />
                                <button className="btn btn-primary">Buscar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                            <form className="ml-3 d-inline-block" id="formOrdenacao">
                                <DropdownButton id="dropdown-item-button" title="Ordernar por...">
                                    <div className="d-flex justify-content-center flex-column">
                                        <Button onClick={() => {
                                            setItensC(filteredItens.sort((a, b) => {
                                                if (a.nome > b.nome) {
                                                    return 1;
                                                }
                                                else if (a.nome < b.nome) {
                                                    return -1;
                                                }
                                                else
                                                    return 0
                                            }))
                                        }}>Nome</Button>
                                        <Button
                                            onClick={() => {
                                                setItensC(filteredItens.sort((a, b) => {
                                                    if (a.preco > b.preco) {
                                                        return 1;
                                                    }
                                                    else if (a.preco < b.preco) {
                                                        return -1;
                                                    }
                                                    else
                                                        return 0
                                                }))
                                            }}
                                        >Preço (Menor - Maior)</Button>
                                        <Button as="button"
                                            onClick={() => {
                                                setItensC(filteredItens.sort((a, b) => {
                                                    if (a.preco < b.preco) {
                                                        return 1;
                                                    }
                                                    else if (a.preco > b.preco) {
                                                        return -1;
                                                    }
                                                    else
                                                        return 0
                                                }))
                                            }}
                                        >Preço (Maior - Menor)</Button>
                                        <Button onClick={() => {
                                            setItensC(itens)
                                        }}>Sem ordenação</Button>
                                    </div>
                                </DropdownButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-1" />

            <div className="container mb-1 mt-1 p-0">
                <div className="row">
                    <div className="col-sm-2 col-12 d-flex align-items-center flex-column text-justify container-fluid"
                        id="containerCategory">
                        <h2>Categorias</h2>
                        <div className="buttonsCategory">
                            <button className="btn btn-primary" onClick={() => {
                                setItensC(itens)
                            }}>Tudo</button>
                            <button className="btn btn-primary" onClick={() => {
                                setItensC(itens.filter(item => item.categoria == "Cama"))
                            }}>Cama</button>
                            <button className="btn btn-primary" onClick={() => {
                                setItensC(itens.filter(item => item.categoria == "Estrado"))
                            }}>Estrado</button>
                            <button className="btn btn-primary" onClick={() => {
                                setItensC(itens.filter(item => item.categoria == "Toalha"))
                            }}>Toalha</button>
                            <button className="btn btn-primary" onClick={() => {
                                setItensC(itens.filter(item => item.categoria == "Coco"))
                            }}>Coco</button>
                        </div>
                    </div>
                    <div className="col-10">

                        <CatalogoItens itens={currentItens} />

                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-5" />
                    <div class="col-12 col-md-7 mt-3 d-flex flex-row-reverse justify-content-center justify-content-md-start">
                        {itens.length &&
                            <Pagination itensPerPage={itensPerPage} totalItens={filteredItens.length} paginate={paginate} />
                        }
                    </div>
                </div>

            </div>



            <div className="container p-0 d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h3>Novidades</h3>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <CardsCatalogo item={itens[0]} />
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <CardsCatalogo item={itens[1]}  />
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <CardsCatalogo  item={itens[2]}/>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Catalogo;