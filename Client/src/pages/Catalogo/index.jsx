import React, { useEffect, useState } from "react";


import styles from "./styles.css";
import Pagination from "./pagination";

//Components
import Footer from "../../components/Footer";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import NavbarComp from "../../components/NavbarComp";
import CarroselCatalogo from "./CarroselCatalogo";
import CardsCatalogo from "./CardsCatalogo";
import CatalogoItens from "./catalogoItens";
import DropdownButton from 'react-bootstrap/DropdownButton';
import ReactLoading from 'react-loading';

import { itens } from "./itens";
import { Button } from "react-bootstrap";
import { useApi } from "../../Hooks/useAPI";



function Catalogo() {

    useEffect(() => {
        getProducts();
    }, [])

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itensPerPage] = useState(16);
    const [busca, setBusca] = useState("");
    const api = useApi();

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const getProducts = async () => {
        await api.getProducts().then((response) => {
            setProducts(response);
        })
    }

    const getFilteredProducts = async (filter) => {
        await api.getFilteredProducts(filter).then((response) => {
            setProducts(response)
        })
    }

    const sortByName = () => {
        setProducts(filteredItens.sort((a, b) => {
            if (a.nome > b.nome) {
                return 1;
            }
            else if (a.nome < b.nome) {
                return -1;
            }
            else
                return 0
        }))
    }

    const sortByLowestPrice = () => {
        setProducts(filteredItens.sort((a, b) => {
            if (a.preco > b.preco) {
                return 1;
            }
            else if (a.preco < b.preco) {
                return -1;
            }
            else
                return 0
        }))
    }

    const sortByHighestPrice = () => {
        setProducts(filteredItens.sort((a, b) => {
            if (a.preco < b.preco) {
                return 1;
            }
            else if (a.preco > b.preco) {
                return -1;
            }
            else
                return 0
        }))
    }

    const indexOfLastItem = currentPage * itensPerPage;
    const indexOfFirstItem = indexOfLastItem - itensPerPage;
    const filteredItens = products.filter(item => item.nome.toLowerCase().includes(busca.toLowerCase()))
    const currentItens = filteredItens.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <ImportaBootstrap />
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
                                        <Button onClick={() => sortByName()}>Nome</Button>
                                        <Button
                                            onClick={() => sortByLowestPrice()}
                                        >Preço (Menor - Maior)</Button>
                                        <Button as="button"
                                            onClick={() => sortByHighestPrice()}
                                        >Preço (Maior - Menor)</Button>
                                        <Button onClick={() => {
                                            getProducts();
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
                                getProducts();
                            }}>Tudo</button>
                            <button className="btn btn-primary" onClick={() => {
                                getFilteredProducts("cama");
                            }}>Cama</button>
                            <button className="btn btn-primary" onClick={() => {
                                getFilteredProducts("estrado");
                            }}>Estrado</button>
                            <button className="btn btn-primary" onClick={() => {
                                getFilteredProducts("toalha");
                            }}>Toalha</button>
                            <button className="btn btn-primary" onClick={() => {
                                getFilteredProducts("coco");
                            }}>Coco</button>
                        </div>
                    </div>
                    <div className="col-10">

                        {products.length > 0
                            ?
                            <CatalogoItens itens={currentItens} />
                            :
                            <div style={{ width: '100%', height: '100%', alignItems: "center", justifyContent: "center", display: "flex" }}>
                                <ReactLoading type={"spin"} color={"#173CF0"} height={70} width={70} />
                            </div>
                        }



                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-5" />
                    <div class="col-12 col-md-7 mt-3 d-flex flex-row-reverse justify-content-center justify-content-md-start">
                        {products.length &&
                            <Pagination itensPerPage={itensPerPage} totalItens={filteredItens.length} paginate={paginate} />
                        }
                    </div>
                </div>

            </div>



            {itens.length > 0
                ?
                <div className="container p-0 d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h3>Novidades</h3>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <CardsCatalogo item={itens[0]} />
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <CardsCatalogo item={itens[1]} />
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <CardsCatalogo item={itens[2]} />
                        </div>
                    </div>
                </div>
                :
                <div style={{ width: '100%', height: '100%', alignItems: "center", justifyContent: "center", display: "flex" }}>
                    <ReactLoading type={"spin"} color={"#173CF0"} height={70} width={70} />
                </div>
            }




            <Footer />
        </div>
    )
}

export default Catalogo;