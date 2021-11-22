import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useCart } from "react-use-cart";
import "./style2.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BsBagXFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { HiMinusCircle } from "react-icons/hi";

const Cart = () => {
  const [isLoading, setLoading] = useState(true);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isEmpty ? (
        <div className="empty-cart-container">
          <BsBagXFill />
          <br />
          <h2 style={{ color: "black" }}>YOUR CART IS EMPTY</h2>
          <Link
            className="btn btn-warning"
            style={{
              width: "16rem",
              fontSize: "1.5rem",
              borderRadius: "15px",
            }}
            to="/"
          >
            SHOP NOW
          </Link>
        </div>
      ) : (
        <div>
          <div className="table-responsive shopping-cart">
            <table className="table">
              <thead>
                <tr>
                  <th>PRODUCTS</th>
                  <th className="text-center">QUANTITY</th>
                  <th className="text-center">PRICE</th>

                  <th className="text-center">
                    <button
                      className="btn btn-sm btn-danger remove-all"
                      onClick={emptyCart}
                    >
                      RESET CART
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody style={{ alignItems: "center" }}>
                {items.map((item) => (
                  /* <li key={item.id}>
                <img src={item.image_url} />
                {item.quantity} x {item.name} &mdash;
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li> */
                  <tr key={item.id}>
                    <td className="image-td">
                      <div className="product-item">
                        {/* <a class="product-thumb" href="#"> */}
                        <img
                          src={item.image_url}
                          style={{ height: "14rem" }}
                          alt="Product"
                        />
                        {/* </a> */}
                        <div
                          className="product-info"
                          style={{ paddingTop: "19.1%", paddingLeft: "2%" }}
                        >
                          <span>
                            <em>{item.subcategory}</em>{" "}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center" style={{ paddingTop: "2.5%" }}>
                      {/* <button
                        class="btn btn-success"
                        style={{ fontSize: "1rem", borderRadius: "50%" }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      > */}
                      <IoMdAddCircle
                        // class="btn btn-success"
                        style={{
                          fontSize: "3rem",
                          borderRadius: "50%",
                          color: "green",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      />

                      <br />
                      <br />

                      {item.quantity}
                      <br />
                      <br />
                      <HiMinusCircle
                        // class="btn btn-warning"
                        style={{
                          fontSize: "3rem",
                          borderRadius: "50%",
                          color: "#dc3545",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      />
                    </td>
                    <td
                      className="text-center text-lg text-medium"
                      style={{ paddingTop: "8%" }}
                    >
                      $ {item.price}
                    </td>
                    <td className="text-center" style={{ paddingTop: "6.7%" }}>
                      <a
                        onClick={() => removeItem(item.id)}
                        style={{
                          fontSize: "2rem",
                          color: "red",
                          cursor: "pointer",
                        }}
                        data-original-title="Remove item"
                        title="Remove Item"
                      >
                        <AiTwotoneDelete />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              position: "fixed",
              width: "100%",
              bottom: "0",
              background: "white",
            }}
          >
            <div className="shopping-cart-footer">
              <div className="column text-lg total-amount">
                TOTAL AMOUNT :{" "}
                <span
                  className="text-medium"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  $ {Math.round(cartTotal * 100) / 100}
                </span>
              </div>
            </div>
            <div className="shopping-cart-footer">
              <div className="column">
                <Link className="btn btn-outline-secondary" to="/">
                  <TiArrowBack style={{ fontSize: "1.5rem" }} /> BACK TO HOME
                </Link>
              </div>
              <div className="column buy-now-btn">
                <a className="btn btn-success" href="#">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
          {/* <h1>Total Amount :$ {Math.round(cartTotal * 100) / 100}</h1> */}
        </div>
      )}
    </div>
  );
};

export default Cart;
