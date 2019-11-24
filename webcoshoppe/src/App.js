import React from 'react';
import Title from './Title';
import Description from './Description';
import ItemList from './ItemList';
import Basket from './Basket';
import CheckoutPage from './CheckoutPage';
import checkoutButton from './checkoutButton';
import {BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'; // big corporate thing which control everything


class App extends React.Component {
// instance variable   don't write state = # //
state = {items: [
  
  {name: 'piano', price: 700}, 
  {name: 'book', price: 400}, 
  {name: 'bottle', price: 1},
  {name: 'bean', price: 2},
  {name: 'propoganda poster', price: 10}
],
size: 0,
price: 0

// size: 2 means 2 will pop up

};

updateBasket = (size) => {
  //IMPORTANT this.setState this is the only way to change state; 
  //this.setState takes in a function. This function takes in the current state as 
  //an argument and returns updated state
  
this.setState(currentState => ({size: currentState.size + 1}));

};

// updateBasket = itemPrice => (
//   this.setStatte(currentState => ({size:currentState.size + 1, price: currentState.price + price}))

// )


updatePrices = (price) => {
  this.setState(currentState => ({price: currentState.price + price}));
                // this.setState calls the class State and takes the current state of price and then adds the new price

};

// we use this.state.item so that we can run javascript; we could have entered piano //
// state is an object //

  render(){
    return (
      <BrowserRouter>
      <div>
        {/* <button onClick={this.updateBasket} > Random </button> */}
   {/* add price is props and this.updatePrice calls on a class method  add price will be given to itemlist*/}

        <Title/>
        <Description/>
{/* // switch surrounds the route 
//route stands for each page
//switch will swap things */}

        <Switch> 
          <Route exact path="/">

        <ItemList updateBasket = {this.updateBasket} items={this.state.items} addPrice = {this.updatePrices}/>
        

        {/* <ItemList items={this.state.items} /> */}

          <Basket size={this.state.size} price= {this.state.price} />

          {/* <button>
            <NavLink to="/checkout"> Checkout </NavLink>
          </button> */}
          </Route>
          <Route path= "/checkout" >
            Your total is {this.state.price}, <br />
             <a> 
               <NavLink to="/">> Keep Shopping? 
               </NavLink> 
               </a>    { /* provides a link as an option ; is an anchor tag*/}

          </Route>
          </Switch>

          {/* {<ItemList item={this.state.item}/>  }  this is an object and can't be rendered with {} 
            In ItemList, this props.item is an object with a string and a number
        */} 
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
