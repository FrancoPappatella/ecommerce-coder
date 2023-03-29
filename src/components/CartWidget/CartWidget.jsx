import React from 'react'
import { BsFillBagFill } from 'react-icons/bs';
import '../CartWidget/cartWidget.css';


export const CartWidget = () => {
  return (
    <div id='nav-icon-container'>
      <BsFillBagFill id='bag-icon'/>
      <p id='product-quantity'>1</p>
    </div>
  )
}


