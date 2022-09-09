import React from "react";
import PropTypes from "prop-types";

function Inventory(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenInventoryClicked(props.id)}>
        <h3>{props.item} - {props.weight}</h3>
        <p><em>{props.description}</em></p>
        <hr/>
      </div> 
    </React.Fragment>
  );
}

Inventory.propTypes = {
  item: PropTypes.string,
  description: PropTypes.string,
  weight: PropTypes.string,
  id: PropTypes.string, 
  whenInventoryClicked: PropTypes.func 
};

export default Inventory;