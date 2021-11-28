import React, { useEffect } from "react";
import "./CategoryCards.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const BrandsCard = (props) => {
  useEffect(() => {
    if (props.id === 1) {
      Aos.init({ duration: 1000, offset: 500 });
    } else if (props.id === 2) {
      Aos.init({ duration: 3000, offset: 1000 });
    } else if (props.id === 3) {
      Aos.init({ duration: 5000, offset: 1500 });
    } else if (props.id === 4) {
      Aos.init({ duration: 7000, offset: 2000 });
    }
  }, []);

  return (
    <>
      <div
        className="col-md-3 col-sm-6 col-6 "
        data-aos="zoom-in-down"
        style={{ marginBottom: "10%" }}
        title={props.name}
      >
        <Link to={props.to} style={{ textDecoration: "none" }}>
          <div className="category-card-dimension1">
            <h4
              className="card-title11 font-weight-bold"
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                alignItems: "center",
              }}
            >
              {props.title}
            </h4>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BrandsCard;
