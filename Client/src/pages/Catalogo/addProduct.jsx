import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useApi } from "../../Hooks/useApi";

const AddProduct = () => {

    const [show, setShow] = useState(false);
    const api = useApi();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const salvarProduto = async () => {
        const nome = document.getElementById("nomeProduto").value;
        const categorias = document.getElementById("categoriasProduto");
        const categoria = categorias.options[categorias.selectedIndex].value;
        const preco = parseFloat(document.getElementById("precoProduto").value);
        const medidas = document.getElementById("medidasProduto").value;
        const descricao = document.getElementById("descricaoProduto").value;
        const material = document.getElementById("materialProduto").value;
        const fabricante = document.getElementById("fabricanteProduto").value;
        const cor1 = document.getElementById("cor1Produto").value;
        const cor2 = document.getElementById("cor2Produto").value;
        const cor3 = document.getElementById("cor3Produto").value;
        const cor4 = document.getElementById("cor4Produto").value;

        if(!nome || !categoria || !preco || !descricao || !medidas || !material || !fabricante){
            return console.log("Preencha todos os campos obrigatórios");
        }


        const produto = {
            nome,
            categoria,
            preco,
            descricao,
            detalhes: {
                medidas,
                material,
                fabricante
            },
            cores: {
                cor1,
                cor2,
                cor3,
                cor4
            },
            imagens: {
                imagem1: "../../img/beautiful-luxury-hotel-bedroom.jpg",
                imagem2: "../../img/assembly-of-a-double-bed-made-of-wood-and-lamella.jpg",
                imagem3: "../../img/composition-with-incense-sticks-diffuser-candles-and-books-on-the-table-in-the-interior-of-the-room.jpg", 
                imagem4: "../../img/folded-towels-on-the-bed.jpg"
            }
        }
        await api.addProduct(produto).then((response) => console.log(response)).then(window.location.href = window.location);

    }

    return (
        <>
            <Button
                onClick={handleShow}
            >Adicionar produto</Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro de Produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ex. Cama King Size"
                                id="nomeProduto"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select aria-label="Floating label select example" id="categoriasProduto">
                                <option value="Cama">Cama</option>
                                <option value="Estrado">Estrado</option>
                                <option value="Toalha">Toalha</option>
                                <option value="Coco">Coco</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Ex. 756,76"
                                id="precoProduto"
                                required = {true}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ex. Cama grande que cabe mais coisa."
                                id="descricaoProduto"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Detalhes</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Medidas = Ex. 1cm altura - 1cm largura - 1cm espessura"
                                id="medidasProduto"
                            />
                            <Form.Control
                                type="text"
                                placeholder="Material = Ex. 100% Algodão"
                                id="materialProduto"
                                autoFocus
                            />
                            <Form.Control
                                type="text"
                                placeholder="Fabricante = Ex. = Casas da Bahia Móveis"
                                id="fabricanteProduto"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Cores(opcional)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Em hexadecimal = Ex. 8B4513"
                                id="cor1Produto"
                                autoFocus
                            />
                            <Form.Control
                                type="text"
                                placeholder="Em hexadecimal = Ex. 8B4513"
                                id="cor2Produto"
                                autoFocus
                            />
                            <Form.Control
                                type="text"
                                placeholder="Em hexadecimal = Ex. 8B4513"
                                id="cor3Produto"
                                autoFocus
                            />
                            <Form.Control
                                type="text"
                                placeholder="Em hexadecimal = Ex. 8B4513"
                                id="cor4Produto"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Imagem</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="Carregue uma foto"
                                id="fotoProduto"
                                autoFocus
                            />
                        </Form.Group> 

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => salvarProduto()}>
                        Cadastrar Produto
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProduct;
