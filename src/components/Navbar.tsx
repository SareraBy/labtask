import React, {Component} from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {HOME_ROUTE, lab1_ROUTE, lab2_ROUTE, lab3_ROUTE, lab4_ROUTE, lab5_ROUTE, MATH_ROUTE} from "../utils/route";
import {Button} from "bootstrap";
import {Link} from "react-router-dom";
interface Nav {
    name?: string;
}
const Navbarmain = ({name}:Nav) => {
    return (
        <Navbar bg="dark"  variant={"dark"} >
            <Container>
                <Navbar.Brand href={HOME_ROUTE}>{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={HOME_ROUTE}>Основная страница</Nav.Link>
                        <Nav.Link href={MATH_ROUTE}>Калькулятор</Nav.Link>
                        <NavDropdown title="Список лабраторных робот" id="basic-nav-dropdown">
                            <NavDropdown.Item href={lab1_ROUTE}>1 lab</NavDropdown.Item>
                            <NavDropdown.Item href={lab2_ROUTE}>2 lab</NavDropdown.Item>
                            <NavDropdown.Item href={lab3_ROUTE}>3 lab</NavDropdown.Item>
                            <NavDropdown.Item href={lab4_ROUTE}>4 lab</NavDropdown.Item>
                            <NavDropdown.Item href={lab5_ROUTE}>5 lab</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://github.com/SareraBy">
                            GitHub
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbarmain;