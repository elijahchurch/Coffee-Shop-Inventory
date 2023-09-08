import React from "react";
import CoffeeMenu from "./CoffeeMenu";
import CreateCoffee from "./CreateCoffee";

class InventoryControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            createFormPage: false,
            coffeeList: [
                {
                    name: "Arabica",
                    origin: "Brazil",
                    roast: "Medium",
                    cost: 30,
                    inventory: 130,
                    id: "initial1"            
                },
                {
                    name: "Harrar",
                    origin: "Ethiopia",
                    roast: "Light",
                    cost: 30,
                    inventory: 130,
                    id: "initial2"              
                },
                {
                    name: "Jackson",
                    origin: "Rwanda",
                    roast: "Dark",
                    cost: 30,
                    inventory: 130,
                    id: "initial3"            
                },
                {
                    name: "Jamaican Blue Mountain",
                    origin: "Jamaica",
                    roast: "Dark",
                    cost: 30,
                    inventory: 130,
                    id: "initial4"           
                },
                {
                    name: "Robusta",
                    origin: "Indonesia",
                    roast: "Light",
                    cost: 30,
                    inventory: 130,
                    id: "initial5"              
                }
            ]
        
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            createFormPage: !prevState.createFormPage
        }));
    }

    handleAddingNewCoffeeItem = (newCoffee) => {
        const newCoffeeList = this.state.coffeeList.concat(newCoffee);
        this.setState({ coffeeList: newCoffeeList,
                        createFormPage: false});
    }


    render(){
        let currentlyVisiblePage = null;
        let buttonText = null;
        if (this.state.createFormPage) {
            currentlyVisiblePage = <CreateCoffee onCoffeeCreation = {this.handleAddingNewCoffeeItem} />;
            buttonText = "Return to Coffee Menu";
        } else {currentlyVisiblePage = 
            <div className="container" id="menu">
                <h2>Coffee Menu</h2>
                < CoffeeMenu coffeeList = {this.state.coffeeList}/>
            </div>;
            buttonText = "Add New Menu Item"
        }
        return(
            <React.Fragment>
                {currentlyVisiblePage}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

export default InventoryControl;