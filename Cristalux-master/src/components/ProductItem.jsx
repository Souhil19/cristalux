import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext'

export default function ProductItem({product}) {
  
  const {addToCart} = useContext(CartContext);

  return (
    
    <div>
         <div className="col">
                            <Link to="../product">
                                <div className="card">
                                    <img src={require("./images/prd1.png")} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">Lustre moderne léger<br/><br/>
                                            <span id="prix">{product.price} DA</span></p>
                                            <button onClick={() => addToCart(product)} type='button'>Add To Cart</button>
                                        </div>
                                </div>
                            </Link>
                        </div>
                       
    </div>
  )
}
