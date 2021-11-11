import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

const NavBar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 " style={{ marginTop: "1%", width: "100%" }}>
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ borderRadius: "41px" }}
          >
            <div className="container-fluid">
              <Link
                to="/"
                className="navbar-brand"
                id="nav-brand"
                style={{ paddingTop: 0 }}
                data-aos="slide-right"
              >
                <FaShopify />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse nav-final"
                id="navbarSupportedContent"
              >
                <form className="d-flex search">
                  <input
                    name="valData"
                    onChange={() => {}}
                    className="form-control me-2"
                    type="search"
                    placeholder="Search products"
                    aria-label="Search"
                    style={{
                      width: "17rem",
                      borderRadius: "25px",
                      background: "white",
                    }}
                  />
                  <div
                    type="submit"
                    onClick={() => {}}
                    style={{
                      paddingLeft: "4px",
                      fontSize: "23px",
                      paddingBottom: "2%",
                    }}
                  >
                    <BsSearch />
                  </div>
                </form>
                <ul
                  className="navbar-nav ml-auto mb-2 mb-lg-0"
                  id="navbar-list"
                >
                  <li className="nav-item nav-category-item">
                    <Link
                      to="/men"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      MEN
                    </Link>
                    <span></span>
                  </li>
                  <li className="nav-item menuitem nav-category-item">
                    <Link
                      to="/women"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      WOMEN
                    </Link>
                    <span></span>
                  </li>
                  <li className="nav-item menuitem nav-category-item">
                    <Link
                      to="/kids"
                      activeclassname="menu-active"
                      className="nav-link"
                      id="nav-category"
                    >
                      KIDS
                    </Link>
                    <span></span>
                  </li>
                  <div className="nav-icons-list">
                    <li className="nav-item menuitem" id="nav-brand">
                      <Link
                        to="/categories"
                        activeclassname="menu-active"
                        className="nav-link"
                        id="navbar-icons"
                        data-aos="slide-left"
                      >
                        <BiCategory />
                      </Link>
                      <span></span>
                    </li>
                    <li className="nav-item menuitem" id="nav-brand">
                      <Link
                        to="/cart"
                        activeclassname="menu-active"
                        className="nav-link"
                        id="navbar-icons"
                        data-aos="slide-left"
                      >
                        <HiShoppingCart />
                      </Link>
                      <span></span>
                    </li>
                    <li className="nav-item menuitem" id="nav-brand">
                      <Link
                        to="/profile"
                        activeclassname="menu-active"
                        className="nav-link"
                        id="navbar-icons"
                        data-aos="slide-left"
                      >
                        <CgProfile />
                      </Link>
                      <span></span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
