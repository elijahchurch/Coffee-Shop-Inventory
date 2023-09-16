import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props){
    const {coffee, onClickingDelete, onClickingEdit} = props;
    let inventory = null;
    if(coffee.inventory === 0) {
        inventory = <span className="alert">"Out of Stock!"</span>;
    } else {
        inventory = `${coffee.inventory} lbs.`
    }
    
    return(
    <div className="container main">
        <h2>{coffee.name} Details</h2>
        <hr/>
        <p>Exported from: {coffee.origin}</p>
        <p>Roast: {coffee.roast}</p>
        <p>Price: ${coffee.cost}</p>
        <p>Inventory: {inventory}</p>
        <hr/>
        <button onClick = {onClickingEdit}>Update</button>
        <button onClick = {()=> onClickingDelete(coffee.id)}>Remove from Menu</button>
    </div>
    );
}

CoffeeDetails.propTypes = {
    coffee: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
}

export default CoffeeDetails