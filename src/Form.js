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