import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";
import InventoryDetail from "./InventoryDetail";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null
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

  handleIncrementingInventoryWeight = (id) => {
    const inventoryWeight = this.state.mainInventoryList.filter(inventory => inventory.id === id)[0];
      if(this.state.inventoryWeight != null || 0) { // add or 0 because dealing with number?
        // return the weight
        console.log(inventoryWeight);
      } else {
        // return the weight -1
      }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.selectedInventory != null) {
      currentlyVisibleState = <InventoryDetail inventory = {this.state.selectedInventory} />
      buttonText = "Return to Inventory List";
      buttonText = "Change weight"
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList}  />;
      buttonText = "Return to Inventory List";
    } else {
      currentlyVisibleState = <InventoryList inventoryList={this.state.mainInventoryList} onInventorySelection={this.handleChangingSelectedInventory} />;
      buttonText = "Add Inventory";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
        {/* <button onClick={this.handleIncrementingInventoryWeight}>{buttonText}</button> */}
      </React.Fragment>
    );
  }
}

export default InventoryControl;