import React from "react";
import CoffeeForm from "./CoffeeForm";

function EditCoffee() {
    return(
        <React.Fragment>
            <CoffeeForm
                buttonText="Update Coffee Entry"/>
        </React.Fragment>
    );
}

export default EditCoffee;