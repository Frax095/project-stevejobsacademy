import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/shopping-card.scss';

function ShoppingCard(props) {
    return(
        <>
            <Container className="shopping-card-container">
                <Link to="/order/completed">
                    <Row>
                        <Col md={4}>
                            <img src={props.img} alt="burgerImage"/>
                        </Col>
                        <Col md={8}>
                            <div className="shopping-detail">
                                <h3>{props.name}</h3>
                                <p>€{props.price}</p>
                            </div>
                        </Col>
                    </Row>
                </Link>
            </Container>
        </>
    )
}

export default ShoppingCard;