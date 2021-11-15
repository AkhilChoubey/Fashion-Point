import React from "react";

const CategoryCard = (props) => {
  return (
    <>
      <div className="col-md-3 col-sm-6 col-6 ">
        <div
          style={{
            padding: 0,
            boxShadow: "0px 18px 53px 0px rgb(185 181 181 / 65%)",
            height: "11rem",
            width: "12rem",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `url(${props.imgsrc}) center/13rem 12rem no-repeat`,
              borderRadius: "12px",
            }}
          >
            <h4 className="card-title font-weight-bold">{props.title}</h4>
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
      </div>
    </>
  );
};

export default CategoryCard;
