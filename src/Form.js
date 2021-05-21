import React from "react";




const Form = (props) => {

    const { values, change, submit} = props;


    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }
    

    return (
        <div id="pizza-form">
            <form onSubmit={onSubmit}>
                <input 
                name="name"
                id="name-input" 
                type="text" 
                placeholder="Type Name"
                value={values.name}
                onChange={onChange}
                /><br/>

                <select 
                id="size-dropdown"
                name="size"
                value={values.size}
                onChange={onChange}
                >
                    <option value="">Select Size</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="x-large">X-Large</option>
                </select><br/>

                <div>Select Toppings:<br/>
                    <label>Pepperoni
                        <input 
                        name="topping1"
                        type="checkbox" 
                        value="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                    </label>
                    <label>Chicken
                        <input 
                        name="topping2"
                        type="checkbox" 
                        value="chicken"
                        checked={values.chicken}
                        onChange={onChange}
                        />
                    </label>
                    <label>Onion
                        <input 
                        name="topping3"
                        type="checkbox" 
                        value="onion"
                        checked={values.onion}
                        onChange={onChange}
                        />
                    </label>
                    <label>Peppers
                        <input
                        name="topping4" 
                        type="checkbox" 
                        value="peppers"
                        checked={values.peppers}
                        onChange={onChange}
                        />
                    </label>
                </div><br/>

                <input 
                name="special-text"
                id="special-text" 
                type="text" 
                placeholder="Special Instructions"
                value={values.special}
                onChange={onChange}
                /><br/>

                <button id="order-button">Add to Order</button>
            </form>
        </div>
    )
}

export default Form;