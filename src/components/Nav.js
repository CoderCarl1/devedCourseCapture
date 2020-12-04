import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <StyledNav>
            <Link>
                <h1 id="logo" to="/">
                    Capture
                </h1>
            </Link>

            <ul>
                <Link to="/">
                    <li>About Us</li>
                </Link>
                <Link to="/work">
                    <li>Our Work</li>
                </Link>
                <Link to="/contact">
                    <li>Contact Us</li>
                </Link>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    #logo {
        font-size: 2.6rem;
        font-family: 'Lobster Two', cursive;
        margin: 0;
    }
    a {
        padding-left: 10rem;
        position: relative;
        color: white;
        text-decoration: none;
    }
    ul {
        list-style: none;
        display: flex;
    }
`

export default Nav
