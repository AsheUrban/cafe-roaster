import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";


function InventoryList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.inventoryList.map((inventory, index) => // Loop through the list passed down from InventoryControl.
        <Inventory item={inventory.item}
          weight={inventory.weight}
          description={inventory.description}
          key={index} />
      )}
    </React.Fragment>
  );
}

// Add propTypes for inventoryList.
InventoryList.propTypes = {
  inventoryList: PropTypes.array
};

export default InventoryList;