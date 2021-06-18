import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'



const NavBar = () => {

    const StyledNavBar = Styled.div`
        display: flex;
        justify-content: center;

        a {
            text-decoration: none;
            border: 2px solid black;
            color: black;
            padding: 4%;
            text-align: center;
            margin: 0 1%;
        }

        div{
            display: flex;
            justify-content: flex-end;
            text-align: center;
            width: 30%;
        }
    `

    return (
        <StyledNavBar>
            <h1>Lambda Eats</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/pizza'>Order</Link>
            </div>
        </StyledNavBar>
    )
}

export default NavBar