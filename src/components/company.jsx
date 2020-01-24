import '../assets/styles/company.scss';
import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import CardCompany from './card-company';
import McDonald from '../assets/images/McDonald.jpg';
import BurgerKing from '../assets/images/burgerking.jpg';
import KFC from '../assets/images/kfc.png';

function Company() {
    return (
        <Container>
            <Row className="company-container">
                <Col md={4}>
                    <CardCompany img={McDonald} title="McDonald's"/>
                </Col>
                <Col md={4}>
                    <CardCompany img={BurgerKing} title="BurgerKing"/>
                </Col>
                <Col md={4}>
                    <CardCompany img={KFC} title="KFC"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Company;