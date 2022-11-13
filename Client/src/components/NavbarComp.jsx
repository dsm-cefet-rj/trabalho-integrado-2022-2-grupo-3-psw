import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../img/DeepSleepLogo.png";

import styles from "./NavbarComp.module.css";

import {MdAccountCircle} from "react-icons/md";
import {MdShoppingCart} from "react-icons/md";

function NavbarComp() {
    return (
        <Navbar style={{ backgroundColor: "#1052A8" }} fixed="top" expand="lg">
            <Container fluid className={styles.Espacamento}>
                <Navbar.Brand href="#">
                    <img src={logo} style={{ width: "7rem" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className={styles.Espacamento}>
                    <Nav

                        navbarScroll
                    >
                        <Nav.Link href="#action1" style={{ color: "#fff" }}>Home</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: "#fff" }}>Catalogo</Nav.Link>
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
                        <Nav.Link href="#action1" style={{ color: "#fff" }}><MdAccountCircle size={25}/></Nav.Link>
                        <Nav.Link href="#action3" style={{ color: "#fff" }}><MdShoppingCart size={25}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;