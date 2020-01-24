import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import quotationMarks from '../assets/images/quotationMarks.png';
import '../assets/styles/review.scss';

function Review(props) {
    return (
        <>
        <Container className="review-container">
            <Row>
                <Col md={4}>
                    <img src={quotationMarks} alt="img"/>
                </Col>
                <Col md={8}>
                    <h4>{props.user}</h4>
                    <p>{props.review}</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Review;