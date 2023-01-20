import React from 'react'

export default function Footer() {
  return (
    <div>
            <footer className="ftco-footer ftco-section">
                <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">RMR DEV</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li className="ftco-animate"><a href="#"><img src={require("./images/fb.png")} alt="" /></a></li>
                            <li className="ftco-animate"><a href="#"><img src={require("./images/in.png")} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">Menu</h2>
                            <ul className="list-unstyled">
                            <li><a href="../" className="py-2 d-block">Acueille</a></li>
                            <li><a href="../products" className="py-2 d-block">Produits</a></li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Tu as une question</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                <li><span className="icon"><i class="fa-sharp fa-solid fa-map-location-dot"></i></span><span className="text">181 Hai Omer Ibn Khatab Ain Temouchent Algeria</span></li>
                                <li><a href="#"><span className="icon"><i class="fa-solid fa-phone"></i></span><span className="text">+1 123 456 789</span></a></li>
                                <li><a href="#"><span className="icon"><i class="fa-solid fa-envelope"></i></span><span className="text">MerouaneRMR@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-md-12 text-center">

                        CopyRight By One Click Marketing Agency
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}
