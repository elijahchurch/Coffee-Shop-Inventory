import React from "react";
import Coffee from "./Coffee"
import PropTypes from "prop-types"

function CoffeeMenu(props){
    return(
        <React.Fragment>
            {props.coffeeList.map((coffee) =>
                <Coffee
                    coffeeSelect = {props.onCoffeeSelect}
                    name={coffee.name}
                    origin={coffee.name}
                    roast={coffee.roast}
                    cost={coffee.cost}
                    inventory={coffee.inventory}
                    id={coffee.id}
                    key={coffee.id} />
            )}
        </React.Fragment>
    );
}

CoffeeMenu.PropTypes={
    coffeeList: PropTypes.array,
    onCoffeeSelect: PropTypes.func
}

export default CoffeeMenu;