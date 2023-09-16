import React from "react";
import CoffeeForm from "./CoffeeForm";
import PropTypes from "prop-types";

function EditCoffee(props) {
    const {coffee} = props;

    function handleEditCoffeeSubmission(event) {
        event.preventDefault();
        props.onEditCoffee({
            name: event.target.name.value, 
            origin: event.target.origin.value, roast: event.target.roast.value,
            cost: event.target.cost.value,
            inventory: coffee.inventory,
            id: coffee.id})
    }
    return(
        <React.Fragment>
            <CoffeeForm
                formSubmissionHandler={handleEditCoffeeSubmission}
                buttonText="Update Coffee Entry"/>
        </React.Fragment>
    );
}

EditCoffee.propTypes = {
    coffee: PropTypes.object,
    onEditCoffee: PropTypes.func
}

export default EditCoffee;