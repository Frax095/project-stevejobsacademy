import React from 'react';
import '../assets/styles/orders.scss';
import ShoppingList from './shopping-list';

function Orders() {
    return(
        <>
            <div className="orders-title">
                <h1>I tuoi ultimi ordini</h1>
            </div>
            <ShoppingList />
        </>
    )
}

export default Orders;