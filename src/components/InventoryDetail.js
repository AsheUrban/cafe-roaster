import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
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

  const { inventory, inventoryWeight, onClickingMinusOne } = props;

  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>Item: {inventory.item} | Base Weight: {inventory.weight} | Remaining Weight: {inventory.inventoryWeight} </h3>
      <p><em>{inventory.description}</em></p>
      <button style={fancyBtn} onClick={ props.onClickingMinusOne }>Sell 1 lb</button>
      <hr/>
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingMinusOne: PropTypes.func
};

export default InventoryDetail;