import React from "react"
import { useHistory } from 'react-router-dom'

const HomePage = () => {

    const history = useHistory()

    const routeToForm = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <div>
                {/* img is set here */}
            </div>
            <img src='../Assets/Pizza.jpg' alt='pizza on a dish'/><br/>
            <button id='order-pizza' onClick={routeToForm}>Pizza?</button>
        </div>
    )
}

export default HomePage