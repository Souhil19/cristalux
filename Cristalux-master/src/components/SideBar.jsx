import React from 'react'

export default function SideBar() {
  return (
    <div className="sidebar">
       
                <header>

                <div className="input-group">
                <span className="input-group-append">
                <div className="input-group-text bg-transparent">
                    <i className="fa fa-search"></i>
                </div>
                <input className="form-control py-2 border-right-0 border" type="search" value="search" id="example-search-input"/>
                </span>
                

            </div>
                </header>
                <div className="scrollbox">
                    <div className="scrollbox-inner">
                        <ul>
                            <li>Lustre</li>
                            <li>Vase</li>
                            <li>Cadre Photo</li>
                            <li>Miroirs</li>
                            <li>Service de tasse</li>
                            <li>Horloge</li>
                            <li>First</li>
                            <li>First</li>
                            <li>First</li>
                            <li>First</li>
                            <li>First</li>
                            <li>First</li>
                            <li>First</li>
                        </ul>
                    </div>
                </div>
                <div className="exp_btn">
                    <button className="btn-cat-1" type="button">toutes catégories</button>
                </div>
            
    </div>
  )
}
