import React from 'react';
import Title from './Title';
import Description from './Description';
import ItemList from './ItemList';

class App extends React.Component {
// instance variable   don't write state = # //
state = {item: {name: 'piano', price: 700} };

// we use this.state.item so that we can run javascript; we could have entered piano //
// state is an object //

  render(){
    return (
      <div>
        <Title/>
        <Description/>
  

          {/* {<ItemList item={this.state.item}/>  }  this is an object and can't be rendered with {} 
            In ItemList, this props.item is an object with a string and a number
        */} 
       
      </div>
    );
  }
}

export default App;
