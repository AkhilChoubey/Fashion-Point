import React, { useEffect } from "react";
import "./CategoryCards.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="col-md-3 col-sm-6 col-6 " data-aos="zoom-in">
        <Link to={props.to} style={{ textDecoration: "none" }}>
          <div className="category-card-dimension">
            <div
              className="category-body"
              style={{
                width: "100%",
                height: "100%",
                background: `url(${props.imgsrc}) center/13rem 12rem no-repeat`,
                borderRadius: "12px",
                // paddingTop: "76.68%",
              }}
            >
              <h4
                className="card-title font-weight-bold"
                style={{
                  textAlign: "center",
                  color: "white",
                  background: "rgba(0,0,0,0.4)",
                  borderRadius: "0 0 12px 12px ",
                }}
              >
                {props.title}
              </h4>
            </div>
          </div>
          {/* <div
          className="card"
          style={{
            padding: 0,
            boxShadow: "0px 18px 53px 0px rgb(185 181 181 / 65%)",
            height: "4rem",
          }}
          // data-aos="fade-up"
        >
          <div
            className="card-body"
            style={{ background: `url(${props.imgsrc})`, height: "7rem" }}
          >
            {/* <img
              src={props.imgsrc}
              className="card-img-top"
              alt={props.imgsrc}
            /> 
            <h5 className="card-title font-weight-bold">{props.title}</h5>
          </div>
        </div>
        */}
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
