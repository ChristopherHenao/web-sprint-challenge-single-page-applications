import React from "react"
import Styled from 'styled-components'




const Form = (props) => {

    // Props passed to Form 
    const { values, change, submit } = props

    // This is the styling for the Form
    const StyledForm = Styled.div`
        border: 2px dashed black;
        border-radius: 50px;
        width: 50%;
        margin: 2% auto 2% auto;
        padding: 2%;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: lightSkyBlue;
        font-size: 110.5%;

        input {
            margin: 1.5%;
        }
    `

const onSubmit = evt => {
    evt.preventDefault()
    submit()
  } 

    return (
        <StyledForm>
            <h2>Build Your Own Pizza</h2>
            <form id='pizza-form' onSubmit={onSubmit}>
                <label>Name: </label>
                    {/* Name Input */}
                    <input 
                    id='name-input'
                    name='name'
                    type='text'
                    onChange={change}
                    /><br/>
                
                <label>Pizza Size: </label>
                    {/* Pizza Size Input */}
                    <select 
                    name='size'
                    id='size-dropdown'
                    onChange={change}
                    >
                        <option value=''>-Select a size-</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='xLarge'>X-Large</option>
                    </select><br/>

                <label>Select Toppings: </label><br/>
                    {/* Toppings Inputs */}
                    <label> Pepperoni </label>
                        <input 
                        name='pepperoniTopping1'
                        type='checkbox'
                        value='pepperoni'
                        onChange={change}
                        />

                    <label> Chicken </label>
                        <input 
                        name='chickenTopping2'
                        type='checkbox'
                        value='chicken'
                        onChange={change}
                        />

                    <label> Ham </label>
                        <input 
                        name='hamTopping3'
                        type='checkbox'
                        value='ham'
                        onChange={change}
                        />

                    <label> Pineapple </label>
                        <input 
                        name='pineappleTopping4'
                        type='checkbox'
                        value='pineapple'
                        onChange={change}
                        /><br/>

                <label>Special Instructions: </label>
                    {/* Special Instructions Input */}
                    <input 
                    id='special-text'
                    name='specialInstructions'
                    type='text'
                    onChange={change}
                    /><br/>

                {/* Submit Button */}
                <button>Add to Order</button>
            </form>
        </StyledForm>
    )
}

export default Form