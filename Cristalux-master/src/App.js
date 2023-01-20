import React, { useState,useEffect } from 'react'
import Home from "./components/Home";
import {Route,Routes} from 'react-router-dom';
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Swal from 'sweetalert2'
import Cart from './components/Cart';
import Footer from './components/Footer';
import { CartContext } from './components/context/CartContext';
import Checkout from './components/Checkout';
import ProductPage from './components/ProductPage';

function App() {

  const [products,setProducts] = useState([
    {
        id : 1,
        name : "Chandelier",
        price : 2357.81,
        image : "images/prd1.png"
    },
    {
        id : 2,
        name : "Wall Clock",
        price : 4357.81,
        image : "images/prd2.png"
    },
    {
        id : 3,
        name : "Wall Clock",
        price : 1357.81,
        image : "images/prd3.png"
    },
    {
        id : 4,
        name : "Cups",
        price : 5357.81,
        image : "images/prd4.png"
    },
    {
        id : 5,
        name : "Wall Clock",
        price : 8357.81,
        image : "images/prd1.png"
    },
    {
        id : 6,
        name : "Wall Clock",
        price : 357.81,
        image : "./images/prd1.png"
    }

])
const [wilaya,setWilayas] = useState([
  {
      id : 1,
      name : "Adrar ",
  },
  {
    id : 2,
    name : "Chlef ",
  },
  {
    id : 3,
    name : "Laghouat ",
},
{
  id : 4,
  name : "Oum El Bouaghi ",
},
{
  id : 5,
  name : "Batna ",
},
{
  id : 6,
  name : "Béjaïa ",
},
{
  id : 7,
  name : "Biskra ",
},
{
  id : 8,
  name : "Béchar ",
},
{
  id : 9,
  name : "Blida ",
},
{
  id : 10,
  name : "Bouira ",
},
{
  id : 11,
  name : "Tamanrasset ",
},
{
  id : 1,
  name : "Adrar ",
},
{
  id : 12,
  name : "Tébessa ",
},
{
  id : 13,
  name : "Tlemcen ",
},
{
  id : 14,
  name : "Tiaret ",
},
{
  id : 15,
  name : "Tizi Ouzou ",
},
{
  id : 16,
  name : "Alger ",
},
{
  id : 17,
  name : "Djelfa ",
},
{
  id : 18,
  name : "Jijel ",
},
{
  id : 19,
  name : "Sétif ",
},
{
  id : 20,
  name : "Saïda ",
},
{
  id : 21,
  name : "Skikda ",
},
{
  id : 22,
  name : "Sidi Bel Abbès ",
},
{
  id : 23,
  name : "Annaba ",
},
{
  id : 24,
  name : "Guelma ",
},
{
  id : 25,
  name : "Constantine ",
},
{
  id : 26,
  name : "Médéa ",
},
{
  id : 27,
  name : "Mostaganem ",
},
{
  id : 28,
  name : "M'Sila ",
},
{
  id : 29,
  name : "Mascara ",
},
{
  id : 30,
  name : "Ouargla ",
},
{
  id : 31,
  name : "Oran ",
},
{
  id : 32,
  name : "El Bayadh ",
},
{
  id : 33,
  name : "Illizi * ",
},
{
  id : 34,
  name : "Bordj Bou Arreridj ",
},
{
  id : 35,
  name : "Boumerdès ",
},
{
  id : 36,
  name : "El Tarf ",
},
{
  id : 37,
  name : "Tindouf ",
},

{
  id : 38,
  name : "Tissemsilt ",
},
{
  id : 39,
  name : "El Oued * ",
},
{
  id : 40,
  name : "Khenchela ",
},
{
  id : 41,
  name : "Souk Ahras ",
},
{
  id : 42,
  name : "Tipaza ",
},
{
  id : 43,
  name : "Mila ",
},
{
  id : 44,
  name : "Aïn Defla ",
},
{
  id : 45,
  name : "Naâma ",
},
{
  id : 46,
  name : "Aïn Témouchent ",
},
{
  id : 47,
  name : "Ghardaïa ",
},
{
  id : 48,
  name : "Relizane ",
},
{
  id : 49,
  name : "Timimoun ",
},
{
  id : 50,
  name : "Bordj Badji Mokhtar ",
},
{
  id : 51,
  name : "Ouled Djellal ",
},
{
  id : 52,
  name : "Béni Abbès ",
},
{
  id : 53,
  name : "In Salah ",
},
{
  id : 54,
  name : "In Guezzam  ",
},
{
  id : 55,
  name : "Touggourt ",
},
{
  id : 56,
  name : "Djanet ",
},
{
  id : 57,
  name : "El M'Ghair ",
},
{
  id : 58,
  name : "El Meniaa ",
}



])

const [cartItems,setCartItems] = useState([]);
const addToCart = (item) => {
    let productItem = cartItems.find(product => product.id === item.id);
    if(productItem){
        productItem.qnt += 1;
        setCartItems([...cartItems]);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'La quantite de produit a ete mis a jour',
            showConfirmButton: false,
            timer: 1500
          });
    }else{
        item.qnt = 1;
        setCartItems([item,...cartItems]);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Le produit a ete ajouter',
            showConfirmButton: false,
            timer: 1500
          });
    }
    
}

const IncrementQ = (item) =>{
  let productItem = cartItems.find(product => product.id === item.id);
  if(productItem){
      productItem.qnt += 1;
      setCartItems([...cartItems]);
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La quantite de produit a ete mis a jour',
          showConfirmButton: false,
          timer: 1500
        });
      }
}

const DecrementQ = (item) =>{
  let productItem = cartItems.find(product => product.id === item.id);
  let lcproductItem = JSON.parse(localStorage.getItem("cartItems"));
  
  if(productItem){
      productItem.qnt -= 1;
      if(productItem.qnt === 0)
      {
        setCartItems(cartItems.filter(product => product.id !== item.id))
        lcproductItem = lcproductItem.filter(lcproductItem => lcproductItem.id !== item.id);
        localStorage.setItem('cartItems',JSON.stringify(lcproductItem));
        if(lcproductItem.length === 0)
        {
          localStorage.removeItem("item");
        }
      }else{
        setCartItems([...cartItems]);
      }
     
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La quantite de produit a ete mis a jour',
          showConfirmButton: false,
          timer: 1500
        });
      }
  }
const removeFromCart = (item) => {
  setCartItems(cartItems.filter(product => product.id !== item.id))
  let lcproductItem = JSON.parse(localStorage.getItem("cartItems"));
  lcproductItem = lcproductItem.filter(lcproductItem => lcproductItem.id !== item.id);
  localStorage.setItem('cartItems',JSON.stringify(lcproductItem));
  if(lcproductItem.length === 0)
  {
    localStorage.removeItem("item");
  }
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Le Produit est suprimer',
    showConfirmButton: false,
    timer: 1500
  });
}

useEffect(() => {
  const data = localStorage.getItem('cartItems');
  if(data !== null)
    setCartItems(JSON.parse(data));
}, []);
useEffect(() => {
  if(cartItems.length > 0)
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
},);
  return (
    <CartContext.Provider value={
      {
        products, addToCart,IncrementQ,DecrementQ,removeFromCart,cartItems,setCartItems,wilaya
      }
    }>
          <div className="App">
      
      <Header cartItems={cartItems}/>

      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/product' element={<ProductPage />} />
      <Route exact path='/checkout' element={<Checkout />} />
      <Route exact path='/products' element={<ProductList />} />
      <Route exact path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
      
    </div>
    </CartContext.Provider>
  );
}

export default App;
