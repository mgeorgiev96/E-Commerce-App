import React,{createContext,useState} from 'react';



export const Context = createContext()

export const ContextProvider = (props)=>{
    const [cart,setCart] = useState(0)
    const [count,setCount] = useState(0)
    const [price,setPrice] = useState(0)
    return (
        <Context.Provider value={[cart,setCart,count,setCount,price,setPrice]}>
            {props.children}
        </Context.Provider>
    )
}