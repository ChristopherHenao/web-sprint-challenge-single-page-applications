import React from "react"

const Form = () => {

    return (
        <div>
            <form id='pizza-form'>
                <label>Name: </label>
                    <input 
                    id='name-input'
                    name='name'
                    type='text'
                    /><br/>
                
                <label>Pizza Size: </label>
                    <select 
                    name='size'
                    id='size-dropdown'
                    >
                        <option value=''>Select a size</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='xLarge'>X-Large</option>
                    </select><br/>

                <label>Select Toppings: </label><br/>
                    <label> Pepperoni </label>
                        <input 
                        name='pepperoni-topping1'
                        type='checkbox'
                        value='pepperoni'
                        />

                    <label> Chicken </label>
                        <input 
                        name='chicken-topping2'
                        type='checkbox'
                        value='chicken'
                        />

                    <label> Ham </label>
                        <input 
                        name='ham-topping3'
                        type='checkbox'
                        value='ham'
                        />      

                    <label> Pineapple </label>
                        <input 
                        name='pineapple-topping1'
                        type='checkbox'
                        value='pineapple'
                        />
                <br/>

                <label>Special Instructions: </label>
                    <input 
                    id='special-text'
                    name='specialInstructions'
                    type='text'
                    />
            </form>
        </div>
    )
}

export default Form