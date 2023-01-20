import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SideBar from './SideBar'

export default function Home() {
  return (
    <div>
        
        <div className="container1">

                <div className="row1">
                    <div className="col1">
                        <h1>Offres exclusives de la collection de meubles</h1>
                        <p>Explorez différentes catégories. Trouvez les meilleures offres.</p>
                        <button className="btn-header-1" type="button">Achetez maintenant</button>
                    </div>
                </div>
            </div>
            <section className="exp_cat">
                <div className="title">
                    <h1>Explorer par catégorie</h1>
                </div>
                <div className="row8">
                    <div className="col1_crd1">
                    <SideBar />
                    </div>
                    <div className="col1_crd2">
                        
                        <div className="card1" style={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("+require('./images/catbg1.png')+";"}}>
                            <div className="crd_titl">
                                <h1>Lustre</h1>
                            </div>
                            <button type="button">Explorer</button>
                        </div>
                        
                        <div className="card1" style={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("+require('./images/catbg2.png')+";"}}>
                            <div className="crd_titl">
                                <h1>Vase</h1>
                            </div>
                           
                        </div>
                        <div className="card1" style={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+require('./images/catbg3.png')+";"}}>
                            <div className="crd_titl">
                                <h1>Cadre Photo</h1>
                            </div>
                            
                        </div>
                        <div className="card1" style={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+require('./images/catbg4.png')+";"}}>
                            <div className="crd_titl">
                                <h1>Miroirs</h1>
                            </div>
                            
                        </div>
                        <div className="card1" style={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+require('./images/catbg5.png')+";"}}>
                            <div className="crd_titl">
                                <h1>Service de tasse</h1>
                            </div>
                            

                        </div>
                        <div className="card1" style={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("+require('./images/catbg6.png')+";"}}>
                            <div className="crd_titl">
                                <h1>Horloge</h1>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>


            </section>
            <section className="pp">
                <div className="title">
                    <h1>Produits populaires</h1>
                </div>
                                    <div className="dd">
                                        <Link to="/product">
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        </Link>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        <div className="cardd">
                                        <img src={require('./images/prd2.png')} className="cardd-img-top" alt="..."/>
                                            <div className="cardd-body">
                                                <h5 className="cardd-title">Horloge murale</h5>
                                                <p className="cardd-text">Grande horloge murale<br/><br/>
                                                    <span id="prix">5,657.81 DA</span></p>
                                    
                                            </div>
                                        </div>
                                        
                                    
                                    </div>
                                
                       

                
                
            </section>
            
    
        
    </div>
  )
}
