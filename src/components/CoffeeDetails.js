import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props){
    const {coffee, onClickingDelete} = props;
    return(
    <div className="container main">
        <h2>{coffee.name} Details</h2>
        <hr/>
        <p>Exported from: {coffee.origin}</p>
        <p>Roast: {coffee.roast}</p>
        <p>Cost: {coffee.cost}</p>
        <p>Amount of Inventory Left: {coffee.inventory}lbs.</p>
        <button onClick = {()=> onClickingDelete(coffee.id)}>Remove from Menu</button>
    </div>
    );
}

CoffeeDetails.propTypes = {
    coffee: PropTypes.object,
    onClickingDelete: PropTypes.func
}

export default CoffeeDetails