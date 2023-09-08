import React from "react";
import PropTypes from "prop-types";

function CoffeeForm(props) {
    return(
        <div className="container">
            <form onSubmit={props.formSubmissionHandler}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Coffee Name" 
                    required />
                <input 
                    type="text"
                    name="origin"
                    placeholder="Country Exported From"
                    required />
                <label for="roast">Roast:</label>
                <select name="roast" required>
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Dark">Dark</option>
                </select>
                <input 
                    type="number"
                    min="0"
                    step="1"
                    required />
                <button type="submit">{props.buttonText}</button>                
            </form>
        </div>
    );
}

CoffeeForm.PropTypes ={
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
}

export default CoffeeForm