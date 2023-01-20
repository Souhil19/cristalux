import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import CartCheckout from './CartCheckout'

export default function Checkout() {
    
    const {wilaya,cartItems} = useContext(CartContext);
    const madina = wilaya.map(product => 

    <option key={product.id}  value={product.id} product={product}>{product.name}</option>)
  return (
    <div>
                       
        <div className="title">
            <h1>Paiment</h1>
         </div>
        <div className="row">
            
            <div className="first col" >
                <div className="pymntinf">
                    <div className="pymnttt">
                        Methode De payment
                    </div>
              
                
                    <button type='button' className='pymntmt'>Golden Card</button>
                
                
                    <div className="pymnttt" style={{"margin-top" : "40px"}}>
                        Detaille de paiment
                    </div>
                </div>

                
                
                    <form action="" className='checkfrm' me>
                        <input type="text" className='no-outline' name="" id="" placeholder='Nom' />
                        <input type="text" className='no-outline' name="" id="" placeholder='Prenom' />
                        <select  className='no-outline-select'>
                                {
                                        madina
                                }
                            
                        </select>
                        <input type="text" className='no-outline' name="" id="" placeholder='Adresse' />
                        <input type="text" className='no-outline' name="" id="" placeholder='Telephone' />
                        
                        <div className="row" style={{"margin-left" : "30px", "margin-top" : "40px"}}>
                            <button type='button' className='checkb'>Back</button>
                            <button type='submit' className='checkc'>Confirm : 
                            {
                                parseFloat(cartItems.reduce((acc,item) => acc += item.price * item.qnt , 0).toFixed(4))
                            } Da</button>
                        </div>
                    </form>
                
            </div>
            <div className="sec col mb-6">
                <CartCheckout />
            </div>
        </div>
    </div>
  )
}
