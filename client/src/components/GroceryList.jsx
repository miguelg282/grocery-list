import React from 'react';
import ReacDOM from 'react-DOM';
import GroceryListEntry from './GroceryListEntry.jsx';

class GroceryList extends React.Component {
    constructor(props) {
      super(props)
    }

  render() {
    return(
      <div>
        <h2>Items & Qty</h2>
        {this.props.groceryItems.map((grocery, index)=>
          <GroceryListEntry getGroceries={this.props.getGroceries} grocery={grocery.itemName} key={index} qty={grocery.quantity} id={grocery.id}/>
        )}
      </div>
    )
  }
}

export default GroceryList;