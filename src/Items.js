import React, { useContext } from 'react'
import {Context} from './Context';

function Items(props) {

    const [cart,setCart,count,setCount,price,setPrice] = useContext(Context);


    const clone = (e)=>{
        let item = document.createElement("img")
        item.src = e.target.parentElement.children[2].src
        item.classList.add('active')
        e.target.parentElement.parentElement.appendChild(item)
        let val  = parseInt(e.target.parentElement.children[1].innerHTML)
        let cart_item = document.createElement('li')
        let cart_img = document.createElement('img')
        let delete_i = document.createElement('i')
        delete_i.classList.add('fa')
        delete_i.classList.add('fa-ban')
        cart_img.src = e.target.parentElement.children[2].src
        cart_item.innerHTML = e.target.innerHTML
        cart_item.value = val
        let items_cart = document.querySelector('.items_cart')
        items_cart.appendChild(cart_item)
        cart_item.appendChild(cart_img)
        cart_item.appendChild(delete_i)

        let item_value = parseInt(e.target.parentElement.children[1].innerHTML)
        setPrice(price + item_value)
        setCart(cart + 1)
    }
    return (
        <div className="item_container">
            <h3 onClick={clone}>{props.name}</h3>
            <p value={props.price}>{props.price}$</p>
            <img src={props.image}></img>
        </div>
    )
}

export default Items;
