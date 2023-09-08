import React from "react";

class InventoryControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            CoffeeList: [
                {
                    name: "Arabica",
                    origin: "Brazil",
                    roast: "Medium",
                    cost: 30,
                    inventory: 130            
                },
                {
                    name: "Harrar",
                    origin: "Ethiopia",
                    roast: "Light",
                    cost: 30,
                    inventory: 130            
                },
                {
                    name: "Jackson",
                    origin: "Rwanda",
                    roast: "Dark",
                    cost: 30,
                    inventory: 130            
                },
                {
                    name: "Jamaican Blue Mountain",
                    origin: "Jamaica",
                    roast: "Dark",
                    cost: 30,
                    inventory: 130            
                },
                {
                    name: "Robusta",
                    origin: "Indonesia",
                    roast: "Light",
                    cost: 30,
                    inventory: 130            
                }
            ]
        
        }
    }


    render(){
        return(
            CoffeeMenu
        );
    }
}

export default InventoryControl