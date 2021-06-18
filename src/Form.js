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