import React,{useRef} from 'react'
import { Link } from 'react-router-dom'


export default function ProductPage() {  
    const ref = useRef(null);
    const ref2 = useRef(null);
   
    const Increment = ()=>{
        const el2 = ref.current;
        el2.value++
    }
    const changeImage = (id)=>{
        const PrincipalImage = ref2.current;
        const secondImg = document.getElementById(id);
        PrincipalImage.src = secondImg.src
    }
    const Decrement = ()=>{
        const el2 = ref.current;

        el2.value--
    }


  return (
    <div>
        <div className="title">
            <h1>Explores nos Produits</h1>
         </div>
         <div className="product row">
            <div className="topim col ">
                <div className="prdimgs">
                    <img src={require('./images/prd1.png')} ref={ref2} id="pr" alt="" srcset="" />
                    <div className="scndimg">
                       
                            <img src={require('./images/prd1.png')}  id="1" onClick={() => changeImage("1")}  alt="" srcset="" />
                            <img src={require('./images/prd2.png')} id="2" onClick={() => changeImage("2")}  alt="" srcset="" />
                            <img src={require('./images/prd2.png')} id="3" onClick={() => changeImage("3")}  alt="" srcset="" />
                            <img src={require('./images/prd2.png')} id="4"  onClick={() => changeImage("4")}  alt="" srcset="" />
                       
                    </div>

                </div>

            </div>
            <div className="col mb-6">
                <div className="prdnm">
                    Chandelier
                </div>
                <div className="remise ">
                    <div className="remisep">
                        -58%
                    </div>
                </div>
                
                    <div className="prprdqn">
                        <div className="prprd col mb-4">
                            1500 DA
                        </div>
                        <div className="pprprd col mb-4">
                            1500 DA
                        </div>
                        <div className="qntprd col mb-4 d-flex">
                            <div className="prprdq">
                            Quentite:
                            </div>
                            <div className="mnqnt d-flex">
                            <button onClick={Decrement} className="btn btn-link px-2">
                                <i className="fas fa-minus"></i>
                            </button>

                            <input ref={ref} id="form1" min="1" name="quantity" type="number" className="form-control form-control-sm" />

                            <button onClick={Increment} className="btn btn-link px-2">
                                <i className="fas fa-plus"></i>
                            </button>
                            </div>

                        </div>
                        
                    </div>
                    <div className="mnpbtn">
                            <button className='adtcbtn' type='button'>Add to Cart</button>
                    </div>
                    <div className="prddesc">
                        <h1>Description:</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        </p>
                    </div>
            </div>
           
         </div>
         <hr className='line'/>
         <section className="pp">

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{"margin-bottom" : "0","margin-top" : "0"}}>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cards-wrapper">
                        <Link to="../product">
                        <div className="card d-md-block">
                        <img src={require('./images/prd1.png')}className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Lustre</h5>
                            <p className="card-text">Lustre moderne léger<br/><br/>
                                <span id="prix">5,657.81 DA</span></p>
                        </div>
                        </div>
                        </Link>
                        <div className="card d-none d-md-block">
                        <img src={require('./images/prd2.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Horloge murale</h5>
                            <p className="card-text">Grande horloge murale<br/><br/>
                                <span id="prix">5,657.81 DA</span></p>
                    
                        </div>
                        </div>
                        <div className="card d-none d-md-block">
                        <img src={require('./images/prd2.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Horloge murale</h5>
                            <p className="card-text">Grande horloge murale<br/><br/>
                                <span id="prix">5,657.81 DA</span></p>
                    
                        </div>
                        </div>
                        <div className="card d-none d-md-block">
                        <img src={require('./images/prd2.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Horloge murale</h5>
                            <p className="card-text">Grande horloge murale<br/><br/>
                                <span id="prix">5,657.81 DA</span></p>
                    
                        </div>
                        </div>
                        <div className="card d-none d-md-block">
                        <img src={require('./images/prd1.png')}className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Lustre</h5>
                            <p className="card-text">Lustre moderne léger<br/><br/>
                                <span id="prix">5,657.81 DA</span></p>

                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                        <div className="cards-wrapper">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card d-none d-md-block">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card d-none d-md-block">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card d-none d-md-block">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card d-none d-md-block">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
                
            </section>
    </div>
  )
}
