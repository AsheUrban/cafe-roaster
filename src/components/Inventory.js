import React from "react";
import PropTypes from "prop-types";

function Inventory(props) {
  return(
    <React.Fragment>
      <h3>{props.item} - {props.weight}</h3>
      <p><em>{props.description}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  item: PropTypes.string,
  description: PropTypes.string,
  weight: PropTypes.string
};

export default Inventory;