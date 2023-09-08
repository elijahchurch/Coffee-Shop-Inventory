import React from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import CoffeeForm from "./CoffeeForm"

function CreateCoffee(props){
    
    function handleCoffeeSubmission(event) {
        event.preventDefault();
        props.onCoffeeCreation({
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            cost: event.target.cost.value,
            inventory: 130,
            id: v4()
        })
    }

    return(
        <React.Fragment>
            <CoffeeForm
                formSubmissionHandler={handleCoffeeSubmission}
                buttonText = "Add Coffee Item"/>
        </React.Fragment>
    )

}

CreateCoffee.propTypes = {
    onCoffeeCreation: PropTypes.func
}

export default CreateCoffee;