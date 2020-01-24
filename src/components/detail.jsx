import React from 'react';
import '../assets/styles/detail.scss';
import burgerSfondo from '../assets/images/burger-sfondo.jpg';
import ShoppingList from './shopping-list';

function Detail({match}){
    let title = match.params.detail;
    return (
        <>
            <div className="sfondo-burger">
                <img src={burgerSfondo} alt="burgerSfondo"/>
                <h1>{title}</h1>
            </div>
            <ShoppingList />
        </>
    )
}

export default Detail;