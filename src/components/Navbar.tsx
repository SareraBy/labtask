import React, {Component} from 'react';
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import {
    HOME_ROUTE, lab10_ROUTE,
    lab1_ROUTE,
    lab2_ROUTE,
    lab3_ROUTE,
    lab4_ROUTE,
    lab5_ROUTE,
    lab6_ROUTE, lab7_ROUTE, lab8_ROUTE, lab9_ROUTE,
    MATH_ROUTE
} from "../utils/route";
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

                        <Nav.Link >   <Link to={MATH_ROUTE} className={"text-decoration-none"}>  Калькулятор</Link>   </Nav.Link>
                        <NavDropdown title="Список лабраторных робот" id="basic-nav-dropdown">

                            <Row className={'p-3'}> <Link to={lab1_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'} style={{color:'black'}}>  1 lab</Link>
                             <Link to={lab2_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'}style={{color:'black'}}>  2 lab</Link>
                             <Link to={lab3_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'}style={{color:'black'}}>  3 lab</Link>
                             <Link to={lab4_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'}style={{color:'black'}}> 4 lab</Link>
                             <Link to={lab5_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'}style={{color:'black'}}>  5 lab</Link>
                                <Link to={lab6_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'}style={{color:'black'}}>  6 lab</Link>
                            <Link to={lab7_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'}style={{color:'black'}}>  7 lab</Link>
                        <Link to={lab8_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'}style={{color:'black'}}>  8 lab</Link>
                            <Link to={lab9_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'}style={{color:'black'}}>  9 lab</Link>
                        <Link to={lab10_ROUTE} className={'text-decoration-none mb-2 btn1-click-m'}style={{color:'black'}}>  10 lab</Link> </Row>

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