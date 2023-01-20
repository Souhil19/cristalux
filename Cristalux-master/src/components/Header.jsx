import React, { useContext,useRef } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Cart from './Cart';

export default function Header() {
    const ref = useRef();
    const closeTooltip = () => ref.current.close();
    const {cartItems} = useContext(CartContext)
    function toggle() {
        document.getElementById('nav').classList.toggle('navactive');
    }

  return (
    <div>
            
            <header className="header-nav">
                    <div className="logo">
                    <svg id="Layer_1" data-name="Layer 1"  style = {{width: "40px"}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 842.15 685.15"><defs></defs><path class="cls-1" d="M842.15,175.73,681.32,0H160.85L0,175.73,421.08,685.15Zm-90.32,35.61-65.51,79.58v-.34l-.28.34L686,291l0-8-.26-69.73.58.58v-8.26h70.25ZM685.19,73.77l1.6,1.74L708.6,99.33l0,0L729.3,122l48.54,53h-93ZM156.15,283l0,7.9-.29-.34v.34l-65.5-79.58-4.72-5.73h70.22v8.26l.59-.58ZM64.33,175l48.51-53,20.72-22.61,21.8-23.84,1.6-1.74L157.3,175Zm431.82,287-53.41-53.42,22.11-22.11h31.3Zm0-287h-31.3l-22.11-22.11,53.41-53.42Zm159.2,105.17-.18,48.12v0l-16.73,20.24h0v0L570.57,280.7l75.08-75.09h10Zm-19-232.91,18.09.08h1.79l-.37,93.9L608.14,93.11,562.61,47.24ZM526.79,68.81l7.05-7.05,51.53,51.91,54.25,54.65L633,175H526.79Zm0,136.8h75.52L548.91,259,526.79,236.9Zm0,118.86,22.12-22.1,53.42,53.41H526.79Zm0,61.94h80.34l-80.34,97.18ZM346,47.24H496.15v8.87l-75.09,75.08L346,56.13Zm0,52.21,53.41,53.42L377.29,175H346Zm0,150.13,44-44h62.21l44,44v62.19l-44,44H390l-44-44Zm0,136.83h31.29l22.12,22.11L346,461.94ZM187.68,47.32v-.08h92.55L234,93.11l-46.67,46.33Zm-.71,281v0l-.36-.44.18-47.68.29-74.54h9.41l75.09,75.09-67.85,67.83v0Zm128.38,155.3L235,386.41h80.31Zm0-127.81H239.82l53.41-53.41,22.12,22.1Zm0-118.88L293.23,259l-53.41-53.41h75.53Zm0-61.92H209.19l-7.06-7.06,54.64-54.25,51.92-51.53,6.66,6.67ZM346,505.26l75.08-75.06,75.07,75.06v10L421.08,515,346,514.7Zm71.76,102.23-51-61.68-.32-.38,54.6.2,54.27.18-54,65.29-.31.36-.32-.36Z"/></svg>
                        <span style={{color: "#532200"}}>Cristalux</span>
                        
                    </div>
                    
                    <span className='fas fa-bars' id='menuicon' onClick={toggle}></span>
                
                    
                    <div className="midle" id='nav'>
                        <div className='min'>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" className="link">Acueille</Link>
                                </li>
                                <li>
                                    <Link to="/products" className="link">Produit</Link>
                                </li>
                            </ul>
                        </nav>
                        </div>

                    </div>
                    <div className="shopping-cart">
                    <Popup className='cart' ref={ref} trigger={<button className='cartbtn'> <img src={require('./images/Icon color.png')} alt=""/> <span>({cartItems.length})</span> </button>}   modal nested closeOnDocumentClick >
                    <div><Cart closeTooltip={closeTooltip}/></div>
                    </Popup>
                    
                    </div>
                </header>
            
    </div>
  )
}
