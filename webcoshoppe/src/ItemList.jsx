import React from 'react';
import Item from './Item'; 

// props acts as a passer? //

//class ItemList extends React.Component {
  //  render() {
    //    return (
      //      <ul>
        //        <li> {this.props.item.name} {this.props.item.price}</li>
          //  </ul>
     //   );
 //   }
//}

//React-specific props argument 

//not a class so no "this." needed ;   much simpler than a class- 
//this is a functional component (very useful if you have no states)// 
const ItemList = (props) => {
    return (
        // map uses an argument  ; map creates multiple items; 
        //it takes a function and applies it to every element in the array
        // element  in a list [1,2,3]  1 is an element
        // component some segment of html you plan to insert into app.js
         <ul>       
            {props.items.map(item => (
            // <Item item={item}/>))}

                <Item updateBasket = {props.updateBasket} item={item} whatever= {props.addPrice} />

            ))}

                {/* <Item item={props.item}/> */}
               {/* {props.item.name} {props.item.price} */}
            
        </ul>
    );
};






export default ItemList;