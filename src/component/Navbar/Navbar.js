import React from 'react'
import "./Navbar.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import{BiRestaurant} from "react-icons/bi"
function Navbar() {
    return (
        <div className='bgcolor'>
            <div className='container flexa'>
            
                <nav>
                    <ul>
                    <i className='fonticon'><BiRestaurant/></i>
                        <li>Food restaurent</li>
                        <li></li>
                    </ul>
                </nav>
                <i className='fonticon'><AiOutlineShoppingCart/></i>
            </div>
        </div>
    )
}

export default Navbar