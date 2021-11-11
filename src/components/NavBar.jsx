import React from "react";
import { Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';
import {FaShopify} from 'react-icons/fa'
import {HiShoppingCart} from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';

const NavBar = () => {
    return (
        <div className="container-fluid nav_bg" >
        <div className="row" >
            <div className="col-10 " style={{marginTop: "1%" , width:"100%"}}>
 
           
        <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{borderRadius: "41px"}}>
        <div className="container-fluid">
           <Link to='/' className='navbar-brand' id='nav-brand' style={{paddingTop: 0}}> <FaShopify /> </Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
           <div className="collapse navbar-collapse nav-final" id="navbarSupportedContent" style={{paddingLeft: '15%'}}>
           <form className="d-flex search">
        <input name="valData" onChange={() => {}} className="form-control me-2" type="search" placeholder="Search productss" aria-label="Search" style={{width: "17rem", borderRadius: "25px",background: "white"}} />
        <div type="submit" onClick={() => {}} style={{paddingLeft: "4px" ,fontSize: "23px"}}><BsSearch /></div>
        </form>
           <ul className='navbar-nav ml-auto mb-2 mb-lg-0' style={{marginLeft: '12%', fontSize: '1.15rem', width: '-webkit-fill-available'}}>
                <li className='nav-item menuitem' style={{marginRight: "22px", width: '20%'}}><Link to='/men' activeclassname="menu-active" className="nav-link" id="nav-category">MEN</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px", width: '20%'}}><Link to='/women' activeclassname="menu-active" className="nav-link" id="nav-category">WOMEN</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px", width: '20%'}}><Link to='/kids' activeclassname="menu-active" className="nav-link" id="nav-category">KIDS</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}} id='nav-brand'><Link to='/cart' activeclassname="menu-active" className="nav-link" id="navbar-icons"> <HiShoppingCart /> </Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}} id='nav-brand'><Link to='/profile' activeclassname="menu-active" className="nav-link" id="navbar-icons">  <CgProfile /> </Link><span></span></li>

            </ul>
            </div>
            </div>
        </nav>
        </div>
        </div>
    </div>
    );
}

export default NavBar;