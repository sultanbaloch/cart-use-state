import React, { useState } from 'react';

import './App.css';

function App() {


  const [addCart, setCart] = useState([])

  const [productList, setProduct] = useState([

    {
      id: "1",
      title: "Product",
      price: "100",
      description: "This is product one",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",

    },

    {
      id: "2",
      title: "Product2",
      price: "500",
      description: "This is product two",
      image: "http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

    }
  ])


  function AddCart(value) {

    var result = addCart.find((cart) => cart.id === value.id)
    if (result === undefined) {
      setCart([...addCart, value])
      
    } else {
      alert("cart already added")
    }




  }
  console.log(addCart)

  return (
    <div>

      {productList.map((value, index) => (
        <div key={index}>
          <div className="cart">
            <img className="img" src={value.image} />
            <p>{value.title}</p>
            <p>{value.price}</p>
            <p>{value.description}</p>
          </div>
          <button onClick={() => AddCart(value)}>Add to Cart</button>
        </div>
      ))}


      <div> 
        {addCart.map((value, i) =>(
          <div key={i}>
            <div className="checkOut">
              <img src={value.img} alt=""/>
              <p>{}</p>
              <p>{}</p>
              <p>{}</p>
            </div>
          </div>
        ))}
      </div>



    </div>
  
  )



}








export default App;
