import React from 'react';


// props acts as a passer? //

class ItemList extends React.Component {
    render() {
        return (
            <ul>
                <li> {this.props.item.name} {this.props.item.price}</li>
            </ul>
        );
    }
}

export default ItemList;