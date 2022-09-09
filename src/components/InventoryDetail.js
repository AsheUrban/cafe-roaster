import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory } = props;

  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>{inventory.item} - {inventory.weight}</h3>
      <p><em>{inventory.description}</em></p>
      <hr/>
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object
};

export default InventoryDetail;