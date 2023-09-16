import React from "react";
import PropTypes from "prop-types";

function CoffeeForm(props) {
    return(
        <div className="container main">
            <form onSubmit={props.formSubmissionHandler}>
                <input 
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Coffee Name" 
                    required />
                <input 
                    className="input"
                    type="text"
                    name="origin"
                    placeholder="Country Exported From"
                    required />
                <label for="roast">Roast:</label>
                <select className="input" id="roast" name="roast" required>
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Dark">Dark</option>
                </select>
                <label htmlFor="cost">Price:</label>
                <input
                    className="input"
                    id="cost"
                    name="cost"
                    type="number"
                    min="0"
                    step="1"
                    required />
                <button type="submit">{props.buttonText}</button>                
            </form>
        </div>
    );
}

CoffeeForm.propTypes ={
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
}

export default CoffeeForm