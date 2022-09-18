import React from 'react';
import Inventory from './Inventory';
import PropTypes from 'prop-types';

function InventoryList(props) {
  const inventoryListStyles= {
    backgroundColor: 'white',
    width: '250px',
    margin: 'auto',
    padding: '15px',
    borderRadius: '10px',
  }

  return (
    <div style = {inventoryListStyles}>
    <React.Fragment>
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
    </div>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array
};

export default InventoryList;