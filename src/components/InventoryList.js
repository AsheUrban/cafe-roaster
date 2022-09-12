import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";

function InventoryList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.inventoryList.map((inventory) =>
        <Inventory 
          whenInventoryClicked={props.onInventorySelection}
          weight={inventory.weight}
          inventoryWeight={inventory.inventoryWeight}
          item={inventory.item}
          description={inventory.description}
          id={inventory.id}
          key={inventory.id} />
      )}
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array
};

export default InventoryList;