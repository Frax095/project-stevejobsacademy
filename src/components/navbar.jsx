import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import '../assets/styles/navbar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <>
        <Container>
            <Row>
                <Col md={2}>
                <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
                </Col>
                <Col sm={10} className="navbar-container">
                <div className="navbar">
                    <Link to="/">
                        <button>
                            Home
                        </button>
                    </Link>
                    <Link to="/order/last">
                        <button>
                            Ordini
                        </button>
                    </Link>
                    <Link to="/reviews/clients">
                        <button>
                            Recensioni
                        </button>
                    </Link>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default NavBar;