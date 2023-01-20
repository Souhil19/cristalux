import React from 'react'

export default function CartCheckoutItem({cartItem}) {
  return (
    <div>
        <div className="smcbd">
            <div className="card3 rounded-3 mb-4">
                                    <div className="card3-body p-2">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-1 col-lg-4 col-xl-4">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                            </div>
                                            <div className="col col-lg-2 col-xl-2">
                                            {cartItem.name}
                                                
                                            </div>
                                            <div className="col-md-1 col-lg-2 col-xl-2 d-flex">

                                                Qnt: {cartItem.qnt}


                                            </div>
                                            <div className="col-md-5 col-lg-3 col-xl-3 offset-lg-1">
                                                <h5 className="mb-0 ">{cartItem.price} DA</h5>
                                            </div>

                                        </div>
                                 </div>
                            </div>
        </div>
 


        

                            
    </div>
  )
}
