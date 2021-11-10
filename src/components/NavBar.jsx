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
           <Link to='/' className='navbar-brand' id='nav-brand'> <FaShopify /> </Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
           <div className="collapse navbar-collapse nav-final" id="navbarSupportedContent" style={{paddingLeft: '37%'}}>
           <form className="d-flex search">
        <input name="valData" onChange={() => {}} className="form-control me-2" type="search" placeholder="Search recipes" aria-label="Search" style={{width: "17rem", borderRadius: "25px",background: "white"}} />
        <div type="submit" onClick={() => {}} style={{paddingLeft: "4px" ,fontSize: "23px"}}><BsSearch /></div>
        </form>
           <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/top' activeclassname="menu-active" className="nav-link">MEN</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/healthy' activeclassname="menu-active" className="nav-link">WOMEN</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/contact2' activeclassname="menu-active" className="nav-link">KIDS</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}} id='nav-brand'><Link to='/cart' activeclassname="menu-active" className="nav-link"> <HiShoppingCart /> </Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}} id='nav-brand'><Link to='/profile' activeclassname="menu-active" className="nav-link">  <CgProfile /> </Link><span></span></li>

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