import React, { useState } from 'react';

import './App.css';

function App() {


  const [addCart, setCart] = useState([])

  const [productList, setProduct] = useState([

    {
      id: "1",
      title: "Headphone",
      price: "10000",
      qty: 1,
      description: "Headphone to buy ",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",

    },

    {
      id: "2",
      title: "Smart Watch",
      price: "50000",
      qty: 1,
      description: "Best Watch of 2021",
      image: "http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

    }
  ])


  function AddCart(value) {

    addCart.find((cart) => cart.id === value.id)
    // if (result === undefined) {
    //   setCart([...addCart, value])

    // } else {
    //   alert("cart already added")
    // }

    // setCart(prev =>{
    //   return prev.concat([value])
    // }) 

    setCart(prev => {
      prev.push(value)
      prev = [].concat(prev)
      return prev
    })

    
    
    
  }
  // console.log(addCart)
  
  function increment(value) {

    var inc = addCart.find((cart) => cart.id == value.id)

    if (inc) {
      setCart(
        addCart.map((cart) => 
          cart.id === value.id ? { ...inc, qty: inc.qty + 1 } : addCart
        )
      )
    }

  }


  function decrement(value){
    var dec = addCart.find((cart)=> cart.id == value.id)

    if(dec){
      setCart(
        addCart.map((cart)=> value.id ? {...dec, qty: dec.qty -1 } : addCart)
      )
    }

  }
  return (
    <div className="cart">

      {productList.map((value, index) => (
        <div key={index}>
          <div >
            <img className="img" src={value.image} />
            <p>{value.title}</p>
            <p>{value.price}</p>
            <p>{value.description}</p>
          </div>
          <button onClick={() => AddCart(value)}>Add to Cart</button>
        </div>
      ))}

      <div className="checkOut">
        {addCart.map((value, i) => (
          <div key={i}>
            <div>
              <div><img className="image" src={value.image} alt="" /></div>
              <p>{value.title}</p>
              <p>{value.price}</p>
              <p>{value.description}</p>
              
              <button onClick={()=> increment(value)}>+</button>
              <span>{value.qty}</span>
              <button onClick={() => decrement(value)}>-</button>
              </div>

          </div>
        ))}
      </div>


    </div>






  )



}








export default App;
