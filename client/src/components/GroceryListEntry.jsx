import React from 'react';
import axios from 'axios';

class GroceryListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      groceryItem:'',
      qty: ''
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateGroceries = this.updateGroceries.bind(this);
    this.deleteGroceries = this.deleteGroceries.bind(this);
  }

//========handlers============
  handleDelete(itemId, e) {
    e.preventDefault();
    alert('Deleted from List: ' + itemId);
    this.setState({
      id: itemId,
      groceryItem: this.props.grocery,
      qty: this.props.qty
    }, () => console.log(this.state));
    this.deleteGroceries(itemId);
    this.props.getGroceries();
  }

  handleUpdate(e) {
    e.preventDefault()
    this.props.getGroceries();
  }

//==========axios========
  deleteGroceries(id) {
    axios
    .delete(`/api/${id}`, {
      id: id
    })
    .then(() => this.handleUpdate())
    .catch(err => console.error(err))
  }

  updateGroceries({id, grocery, qty}) {
    var newItem = prompt('change item ?', this.props.grocery);
    var newQty = prompt('change qty ?', this.props.qty)
    // console.log(id, newItem, newQty)
    axios
    .put(`/api/${id}`, {
      id: id,
      itemName: newItem,
      quantity: newQty
    })
    .then(() => this.handleUpdate())
    .catch(err => console.error(err))
  }

//=========render=========
  render() {
    var items = this.props;
    var itemId = this.props.id;
    return (
      <form id='form1'>
    <div>
      <h3 id={this.props.id}>{this.props.grocery} {this.props.qty}<span>  </span>
      <button onClick={() => this.updateGroceries(items)} id='editBtn'> edit </button>
      <span>  </span> <button id='dltBtn' onClick={(e) => this.handleDelete(itemId, e)} > X </button></h3>
    </div>
      </form>
    )
  }
}

export default GroceryListEntry;