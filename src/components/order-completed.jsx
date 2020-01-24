import React from 'react';
import '../assets/styles/order-completed.scss';
import { Container } from 'react-bootstrap';
import ShoppingList from './shopping-list';

function OrderCompleted() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    return(
        <>
        <Container className="order-completed">
            <h1>Il tuo ordine è andato a buon fine</h1>
            <h3>Arriverà fra circa un ora</h3>
        </Container>
        <Container>
            <h1>I tuoi ultimi ordini</h1>
            <ShoppingList />
        </Container>
        </>
    )
}

export default OrderCompleted;