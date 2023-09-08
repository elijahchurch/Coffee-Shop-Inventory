import PropTypes from "prop-types";

function Coffee(props){
    return(
        <div className="container menuItem">
            <h3>{props.name}</h3>
            <hr/>
            <p>Cost: ${props.cost}</p>
            <p>Inventory: {props.inventory} lbs.</p>
        </div>
    )
}

Coffee.propTypes ={
    name: PropTypes.string,
    origin: PropTypes.string,
    roast: PropTypes.string,
    cost: PropTypes.number,
    inventory: PropTypes.string,
    id: PropTypes.string
}

export default Coffee;