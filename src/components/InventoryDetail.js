import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory, onClickingMinusOne } = props;

  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>{inventory.item} - {inventory.weight}</h3>
      <p><em>{inventory.description}</em></p>
      <button onClick={ props.onClickingMinusOne }>Sell 1 lb</button>
      <hr/>
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingMinusOne: PropTypes.func
};

export default InventoryDetail;