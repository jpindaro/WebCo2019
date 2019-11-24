import React from 'react';

// props is whatever is passed down and is why we aren't using class
// call a method with ()
const Item = (props) => {
    const something = () => {
        props.updateBasket(); 
        props.whatever(props.item.price)
    }

    return (
        <li className="header item">
            {props.item.name} <br/>
            {props.item.price} <br/>
            {/* <button> Add To Cart </button> */}
            
<button onClick =  {something} > Add to Cart </button>

        </li>        
                

    );


};

export default Item;