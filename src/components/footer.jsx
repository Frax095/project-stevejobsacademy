import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import '../assets/styles/footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <Container>
                <Row>
                    <Col md={6}>
                        <Link to="/">
                            <img src={logo} alt="footer-logo"/>
                        </Link>
                    </Col>
                    <Col md={6} className="footer-links">
                        <Link to="/">
                                Home
                        </Link>
                        <Link to="/order/last">
                                Ordini
                        </Link>
                        <Link to="/reviews/clients">
                                Recensioni
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;