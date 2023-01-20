import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import CartCheckoutItem from './CartCheckoutItem'

export default function CartCheckout() {
  const {cartItems} = useContext(CartContext);
  return (
    <div>
            <div className="smcart">
                <div className="smcartt">
                   PANIER :
                </div>

                <div className="items">
                {
                   cartItems.map(cartItem => <CartCheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                }
                </div>
                <div className="smcarttp">
                Prix Totale : {
                                                parseFloat(cartItems.reduce((acc,item) => acc += item.price * item.qnt , 0).toFixed(4))
                              }DA
                </div>
            </div>
    </div>
  )
}
