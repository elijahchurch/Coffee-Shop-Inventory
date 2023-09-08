import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props){
    const {coffee} = props;
    return(
    <div className="container main">
        <h2>{coffee.name} Details</h2>
        <hr/>
        <p>Exported from: {coffee.origin}</p>
        <p>Roast: {coffee.roast}</p>
        <p>Cost: {coffee.cost}</p>
        <p>Amount of Inventory Left: {coffee.inventory}lbs.</p>
    </div>
    );
}

CoffeeDetails.propTypes = {
    coffee: PropTypes.object
}

export default CoffeeDetails