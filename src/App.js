import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Categories from "./components/Categories";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <div>
            <div
              style={{
                width: "100%",
                position: "sticky",
                top: "0",
                zIndex: "100",
              }}
            >
              <NavBar />
            </div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
