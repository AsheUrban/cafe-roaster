import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null,
      // inventoryWeight: 0
    };
  }

  handleClick = () => {
    if (this.state.selectedInventory != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewInventoryToList = (newInventory) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
    this.setState({
      mainInventoryList: newMainInventoryList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedInventory = (id) => {
    const selectedInventory = this.state.mainInventoryList.filter(inventory => inventory.id === id)[0];
    this.setState({selectedInventory: selectedInventory});
  }

  // //WIP method for decrementing weight.   
  // handleDecrementingInventoryWeight = (weight) => { 
  //   const inventoryWeight = this.state.selectedInventory.weight -1; // how to decrement this? Loop through map on id
  //       console.log(inventoryWeight); // Can see in console
  //       this.setState({inventoryWeight: inventoryWeight}); 
  // }

  // handleDecrementingInventoryWeight = (id) => { 
  //   const inventoryWeight = this.state.mainInventoryList.map((inventory) => {
  //     if (inventory.id === id) {
  //       if(inventory.weight > 0) {
  //         return { 
  //           ...inventory,
  //           weight: inventory.weight -1,
  //         };
  //       } else {
  //         return inventory.weight;
  //       }
  //     }
  //     console.log(inventory.weight)
  //     console.log(inventory.inventoryWeight)
  //   })
  // }
    


  render(){

    const fancyBtn = {
      backgroundColor:'lavender',
      color:'black',
      fontFamily: 'Jost',
      fontSize: '20px',
      padding: '10px 30px',
      borderRadius: '5px',
      margin: '10px 0px',
      cursor:'pointer'
    };

    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.selectedInventory != null) {
      currentlyVisibleState = <InventoryDetail inventory = {this.state.selectedInventory} onClickingMinusOne = {this.handleDecrementingInventoryWeight} />
      buttonText = 'Return to Inventory List';
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
      buttonText = 'Return to Inventory List';
    } else {
      currentlyVisibleState = <InventoryList inventoryList={this.state.mainInventoryList} onInventorySelection={this.handleChangingSelectedInventory} />;
      buttonText = 'Add Inventory';
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button style={fancyBtn} onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default InventoryControl;