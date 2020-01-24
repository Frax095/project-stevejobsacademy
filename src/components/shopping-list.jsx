import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShoppingCard from './shopping-card';
import burger1 from '../assets/images/burger1.png';
import burger2 from '../assets/images/burger2.png';
import burger3 from '../assets/images/burger3.png';
import burger4 from '../assets/images/burger4.png';
import '../assets/styles/shopping-list.scss';

function ShoppingList() {
    return(
        <Container>
            <Row>
                <ShoppingCard 
                    img={burger1}
                    name="BurgerMaxiBon"
                    price="7.99" 
                />
                <ShoppingCard 
                    img={burger2}
                    name="BurgerReact"
                    price="19.99" 
                />
                <ShoppingCard 
                    img={burger3}
                    name="BurgerBomb"
                    price="3.99" 
                />
                <ShoppingCard 
                    img={burger4}
                    name="BurgerSplice"
                    price="17.99" 
                />
                <ShoppingCard 
                    img={burger3}
                    name="BurgerSplit"
                    price="15.99" 
                />
                <ShoppingCard 
                    img={burger1}
                    name="BurgerMap"
                    price="4.99" 
                />
                <ShoppingCard 
                    img={burger4}
                    name="BurgerReduce"
                    price="9.99" 
                />
                <ShoppingCard 
                    img={burger2}
                    name="BurgerJSDeveloper"
                    price="1.99" 
                />
            </Row>
        </Container>
    )
}

export default ShoppingList;