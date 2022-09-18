import React from 'react';
import PropTypes from 'prop-types';

function Inventory(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenInventoryClicked(props.id)}>
        <h3>Item: {props.item} | Base Weight: {props.weight}</h3>
        <p><em>{props.description}</em></p>
        <hr/>
      </div> 
    </React.Fragment>
  );
}

Inventory.propTypes = {
  item: PropTypes.string,
  description: PropTypes.string,
  weight: PropTypes.number,
  // inventoryWeight: PropTypes.number, // this feels like I'm trying to pass it two ways?
  id: PropTypes.string, 
  whenInventoryClicked: PropTypes.func 
};

export default Inventory;