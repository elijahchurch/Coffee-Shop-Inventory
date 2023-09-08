import React from "react";
import Coffee from "./Coffee"
import PropTypes from "prop-types"

function CoffeeMenu(props){
    return(
        <React.Fragment>
            {props.coffeeList.sort((coffeeA, coffeeB) => coffeeA.name > coffeeB.name ? 1 : -1).map((coffee) =>
                <Coffee
                    coffeeSelect = {props.onCoffeeSelect}
                    coffeeSell = {props.onCoffeeSell}
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

CoffeeMenu.propTypes={
    coffeeList: PropTypes.array,
    onCoffeeSelect: PropTypes.func,
    onCoffeeSell: PropTypes.func
}

export default CoffeeMenu;