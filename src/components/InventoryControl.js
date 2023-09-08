import React from "react";
import CoffeeMenu from "./CoffeeMenu";

class InventoryControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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


    render(){
        return(
            <React.Fragment>
                <h2>Coffee Menu</h2>
                <hr/>
                <CoffeeMenu coffeeList = {this.state.coffeeList}/>
            </React.Fragment>
        );
    }
}

export default InventoryControl