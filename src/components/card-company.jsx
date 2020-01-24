import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../assets/styles/card-company.scss';

function CardCompany(props) {
    return(
        <>
            <Link to={props.title}>
                <div className="card-company">
                    <div>
                        <img src={props.img} alt="img"/>
                    </div>
                    <h3>{props.title}</h3>
                </div>
            </Link>
        </>
    )
}

export default CardCompany;