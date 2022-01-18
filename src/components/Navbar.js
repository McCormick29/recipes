import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
            <a className='h1'>
                <Link to='/'>Home</Link>
            </a>

            <a className='h1'>
                <Link to='/addrecipe'>Add Recipe</Link>
            </a>
        </nav>
    )
}
