import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewInventoryForm(props){

  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    props.onNewInventoryCreation({
      item: event.target.name.value, 
      weight: event.target.weight.value, 
      description: event.target.description.value, 
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewInventoryFormSubmission}>
        <input
          type="text"
          name="item"
          placeholder="Item Name" />
        <input
          type="text"
          name="weight"
          placeholder="lbs" />
        <textarea
          name="description"
          placeholder="Description." />
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;