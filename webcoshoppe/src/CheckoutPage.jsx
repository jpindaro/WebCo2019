import React from 'react'
import {NavLink } from 'react-router-dom';

const CheckoutPage = props => (
    <div>

    Your total is $ {props.state.price}. <br />

    <a>
        <NavLink to="/"> Keep Shopping? </NavLink>
    </a>
    </div>
);

export default CheckoutPage; 
    


