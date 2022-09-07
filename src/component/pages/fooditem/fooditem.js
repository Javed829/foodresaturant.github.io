import React from 'react'
import "./fooditem.css"
import Fedds from '../feeds/feeds'
function Fooditem() {
  return (
    <section className='fooditem'>
        <div className='container grid'>
        {
         Fedds.map((val)=>{
            return(
                <div className='card'>
                <img src={val.image} alt='logo'></img>
                <h1>{val.name}</h1>
                <p>{val.price}</p>
                <p></p>
                <p>cost inr:100</p>
                <div>
                    <button color=''>+</button>
                    <button>-</button>
                </div>
                
            </div>
            )
         })   
        }
        </div>
    </section>
  )
}

export default Fooditem