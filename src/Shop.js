import React from 'react'
import {data} from './Data';
import Items from './Items';

function Shop() {
    return (
        <div className='shop_container'>
            {data.map(item=><Items name={item.name} price={item.price} image={item.image} key={item.id} />)}
        </div>
    )
}

export default Shop;
