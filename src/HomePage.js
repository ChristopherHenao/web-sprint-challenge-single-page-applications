import React from "react"
import { useHistory } from 'react-router-dom'

const HomePage = () => {

    // Created a variable to use in the routeToForm below
    const history = useHistory()

    // Created a function to get to the Form page
    const routeToForm = () => {
        history.push('/pizza')
    }

    return (
        <div>
           
            <p>Click below to order!</p>
            <button id='order-pizza' onClick={routeToForm}>Pizza?</button>
        </div>
    )
}

export default HomePage