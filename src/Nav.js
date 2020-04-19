import React, { useContext } from 'react'
import {Context} from './Context';
import { Link, withRouter } from 'react-router-dom';


function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    const [cart,setCart,count,setCount,price,setPrice] = useContext(Context);
    const cartOpen = ()=>{
        let cart = document.querySelector('.fa-shopping-cart')
        let items_cart = document.querySelector('.items_cart')
        if(count%2==0){
            items_cart.style.opacity= 1
        }else{
            items_cart.style.opacity= 0
        }
        setCount(count + 1)
    }

    const deleteCartItem = (e)=>{
        let target = e.target
        if(target.classList.contains('fa-ban')){
            target.parentElement.style.display='none'
            setCart(cart-1)
            setPrice(price - target.parentElement.value)
        }
    }
    window.addEventListener("click",deleteCartItem)
    return (
        <nav>
            <span className='bottom_border'></span>
            <span className='bottom_border1'></span>
            <ul className='nav_bar'>
                
                <Link style={navStyle} to="/"><li>Home</li></Link>
                <Link style={navStyle} to="/shop"><li>Shop</li></Link>
                <Link style={navStyle} to="/contact"><li>Contact</li></Link>
                <i className='fa fa-shopping-cart' onClick={cartOpen}> {cart}
                <span>{price}$</span></i>
                <ul className='items_cart'>
                </ul>
            </ul>
        </nav>
    )
}

export default Nav;