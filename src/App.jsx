import React,{useState} from 'react';

import './App.css';

function App() {

  const [productList, setProduct] = useState([
    
  {
    title:"Product",    
    price:"100",    
    description:"This is product one",    
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",    

  },

  {
    title:"Product2",    
    price:"500",    
    description:"This is product two",    
    image:"http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",    

  }
])

function AddCart(index){


  return  console.log(index)

}


  return (<>
    <div>

     {productList.map((value, index) =>(
       <div key={index}>
         <div className="cart">
           <img className="img" src={value.image}/>
           <p>{value.title}</p>          
           <p>{value.price}</p>          
           <p>{value.description}</p>          
         </div>
         <button onClick={() => AddCart(index)}>Add to Cart</button>
       </div>
     ))}
  
    

    </div>
    </>
  )
    
 

}
export default App;
