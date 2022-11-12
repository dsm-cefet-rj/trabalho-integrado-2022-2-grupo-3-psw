import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./teste.module.css";
import logo from "../../img/DeepSleepLogo.png";

function NavbarComp() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "#1052A8" }} fixed="top">
            <Container fluid>
                <Navbar.Brand href="#" style={{ display: "flex", alignItems: "center" }}>
                    <img src={logo} style={{ width: "7rem" }} />
                    <Nav.Link href="#action1" style={{ color: "#fff" }}>Deep Sleep</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className={styles.testeStyle}>
                    <Nav

                        navbarScroll
                    >
                        <Nav.Link href="#action1" style={{ color: "#fff" }}>Home</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: "#fff" }}>Catálogo</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Pesquisar</Button>
                    </Form>
                    <Nav>
                        <Nav.Link href="#action1" style={{ color: "#fff" }}>Login</Nav.Link>
                        <Nav.Link href="#action3" style={{ color: "#fff" }}>Carrinho</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp;