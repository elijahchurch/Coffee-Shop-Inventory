import PropTypes from "prop-types";

function Coffee(props){
    let inventory = null;
    let sellButton = <button onClick={() => props.coffeeSell(props.id)}>Sell Inventory</button>;
    if(props.inventory === 0) {
        inventory = <span className="alert">"Out of Stock!"</span>;
        sellButton = null;
    } 
    else if (props.inventory <= 10) {
        inventory = `${props.inventory} lbs - Almost Empty!`
    }  
    else {
        inventory = `${props.inventory} lbs.`;
    }
    return(
        <div className="container menuItem">
            <h3>{props.name}</h3>
            <hr/>
            <p>Price: ${props.cost}</p>
            
            <p>Inventory: {inventory}</p>
            <hr/>
            <button onClick={() => props.coffeeSelect(props.id)}>Details</button>
            {sellButton}
        </div>
    )
}

Coffee.propTypes ={
    name: PropTypes.string,
    origin: PropTypes.string,
    roast: PropTypes.string,
    cost: PropTypes.number,
    inventory: PropTypes.number,
    id: PropTypes.string,
    coffeeSelect: PropTypes.func,
    coffeeSell: PropTypes.func
}

export default Coffee;