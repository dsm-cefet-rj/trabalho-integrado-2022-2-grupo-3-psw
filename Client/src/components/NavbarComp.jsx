import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../img/DeepSleepLogo.png";

import styles from "./NavbarComp.module.css";

import { MdAccountCircle } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

function NavbarComp() {
    return (
        <Navbar style={{ backgroundColor: "#1052A8" }} fixed="top" expand="lg">
            <Container fluid className={styles.Espacamento}>
                <Navbar.Brand href="#">
                    <Link className="text-decoration-none" style={{ color: "inherit" }} to={"/"}>
                        <img src={logo} style={{ width: "7rem" }} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className={styles.Espacamento}>
                    <Nav

                        navbarScroll
                    >
                        <Nav.Link style={{ color: "#fff" }}>
                            <Link className="text-decoration-none" style={{ color: "inherit" }} to={"/"}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link style={{ color: "#fff" }}>
                            <Link className="text-decoration-none" style={{ color: "inherit" }} to={"/catalogue"}>
                                Catalogo
                            </Link>
                        </Nav.Link>
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
                        <Nav.Link href="#action1" style={{ color: "#fff" }}>
                            <MdAccountCircle size={25} />
                        </Nav.Link>
                        <Nav.Link href="#action3" style={{ color: "#fff" }}>
                            <Link className="text-decoration-none" style={{ color: "inherit" }} to={"/cart"}>
                                <MdShoppingCart size={25} />
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;