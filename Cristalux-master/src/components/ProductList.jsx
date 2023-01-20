import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import Pagination from './Pagination'
import ProductItem from './ProductItem'
import SideBar from './SideBar'


export default function ProductList() {
    const {products} = useContext(CartContext);

  return (
    <div>
        
            <div className="title">
                    <h1>Découvrez notre produit</h1>
            </div>
            <div className="container">

            </div>
            <div className="list row">
                <div className="col">
                    <SideBar />
                </div>
                <div className="col-sm-9" >
                    <div className="products row">
                        {
                            products.map(product => <ProductItem key={product.id} product={product}/>)
                        }
                    </div>
                </div>
            </div>
            <Pagination />
           
        </div>
            
            
   
  )
}
