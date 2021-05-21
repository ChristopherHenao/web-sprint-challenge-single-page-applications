import React from "react";




const Form = () => {

    return (
        <div id="pizza-form">
            <form>
                <input 
                id="name-input" 
                type="text" 
                placeholder="Type Name"
                /><br/>

                <select id="size-dropdown">
                    <option value="">Select Size</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="x-large">X-Large</option>
                </select><br/>

                <div>Select Toppings:<br/>
                    <label>Pepperoni
                        <input type="checkbox" value="pepperoni"/>
                    </label>
                    <label>Chicken
                        <input type="checkbox" value="chicken"/>
                    </label>
                    <label>Onion
                        <input type="checkbox" value="onion"/>
                    </label>
                    <label>Peppers
                        <input type="checkbox" value="peppers"/>
                    </label>
                </div><br/>

                <input 
                id="special-text" 
                type="text" 
                placeholder="Special Instructions"
                /><br/>

                <button id="order-button">Add to Order</button>
            </form>
        </div>
    )
}

export default Form;