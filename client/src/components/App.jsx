import React from 'react';
import ReactDOM from 'react-DOM';
import GroceryList from './GroceryList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groceryItem: '',
      qty: '',
      groceryItems: []
    }
    //get grocery list and display.
    //add grocery item and qty inputs.
    //onSubmit, send the inputs and submit a post request
    //
    this.getGroceries = this.getGroceries.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.getGroceries();
  }

//=========handlers=============
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // alert('Added To List: ' + this.state.groceryItem, this.state.qty);
    this.postGroceries(this.state.groceryItem, this.state.qty);
    e.target.reset();
    this.getGroceries();
  }

//==============axios requests================
getGroceries() {
  axios
  .get('/api')
  .then((groceryItems) => {
    // console.log(groceryItems.data);
    this.setState({
      groceryItems: groceryItems.data
    });
  })
  .catch(err => console.error(err))
}
// Send a POST request
postGroceries(groceryItem, qty) {
  axios
  .post('/api', {
    itemName: groceryItem,
    quantity: qty
  })
  .then(() => this.props.getGroceries())
  .catch(err => console.error(err))
}

//================Render Form=============
render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label> Item
        <input name="groceryItem" onChange={this.handleChange} />
      </label>
      <div></div>
      <label> Qunatity
        <input name="qty" onChange={this.handleChange}/>
      </label>
      <button>Add Grocery</button>
    </form>
      <GroceryList getGroceries={this.getGroceries} groceryItems={this.state.groceryItems}/>
      </div>
    )
  }
}
 export default App;