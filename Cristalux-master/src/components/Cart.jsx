
import CartItem from './CartItem'
import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import Header from './Header'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

export default function Cart(closeTooltip) {
    const {cartItems} = useContext(CartContext);
    
    
    if (cartItems.length > 0 ) {
        return (
           
                <div className='Cartcnt' >
                       
                       <div className="title">
                       <h1>Mon Panier</h1>
                       </div>
                       <section className="h-100">
                           <div className="container">
                               <div className="row align-items-center ">
                                   <div className="col">
                                        <div className="cart_items">
                                        {
                                               cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)
                                        }
                                        </div>
                                    
                                       
                                   </div>
   
                               </div>
                               <div className="row d-flex justify-content-end">
                                   <div className="ttp" id='ttp'>
                                       Total Price : {
                                          parseFloat(cartItems.reduce((acc,item) => acc += item.price * item.qnt , 0).toFixed(4))
                                       } DA
                                   </div>
                                        
                                   
                               </div>
   
                               <div className="row d-flex justify-content-between">
                                       <Link to="../products">
                                       <button className='checkb' onClick={closeTooltip}   style={{width:"200px"}}>Continue vous achats</button>
                                       </Link>
                                       <Link to="../checkout">
                                       <button className='checkc' onClick={closeTooltip} >Paiment</button>
                                       </Link>
                                  
                               </div>
                           </div>
   
                       </section>
   
                   
            
       </div>
           
            
        
        
        
        
            
          )
    }else{
        return (
            <div>
                       
                            <div className="title">
                            <h1>Mon Panier</h1>
                            </div>
                            <section className="h-100">
                                <div className="container h-100 py-5">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col-10">
                                            {
                                                    cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)
                                            }
                                            
                                        </div>
        
                                    </div>
                                    <div className="row d-flex justify-content-end">
                                        <div className="ttp" id='ttp'>
                                            Total Price : {
                                                cartItems.reduce((acc,item) => acc += item.price * item.qnt , 0)
                                            } DA
                                        </div>
                                             
                                        
                                    </div>
        
                                    

                                </div>
        
                            </section>
        
                        
                 
            </div>
        
        
        
        
            
          )
    }
  
}
