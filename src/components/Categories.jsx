import React, { useEffect, useState } from "react";
import CategoryCard from "./Cards/CategoryCard";
import Loading from "./Loading";
import d1 from "./images/CateroryImage/d1.jpg";
import d2 from "./images/CateroryImage/d2.jpg";
import d3 from "./images/CateroryImage/d3.jpg";
import d4 from "./images/CateroryImage/d4.jpg";
import d5 from "./images/CateroryImage/d5.jpg";
import d6 from "./images/CateroryImage/d6.jpg";
import d7 from "./images/CateroryImage/d7.jpg";
import d8 from "./images/CateroryImage/d8.jpg";
import d9 from "./images/CateroryImage/d9.jpg";
import d10 from "./images/CateroryImage/d10.jpg";
// import d11 from "./images/CateroryImage/d11.jpg";
// import d12 from "./images/CateroryImage/d12.jpg";

const Categories = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-10" id="top-elements">
              <div className="row gy-4">
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d2} title="WINTER WEAR" />
                <CategoryCard imgsrc={d3} title="CASUALS" />
                <CategoryCard imgsrc={d4} title="WESTERN" />
                <CategoryCard imgsrc={d5} title="MOODY" />
                <CategoryCard imgsrc={d6} title="TRADITIONAL" />
                <CategoryCard imgsrc={d7} title="SPORTS WEAR" />
                <CategoryCard imgsrc={d8} title="CLASSICS" />
                <CategoryCard imgsrc={d9} title="CAPS" />
                <CategoryCard imgsrc={d10} title="FESTIVE WEAR" />
                <CategoryCard imgsrc={d10} title="KIDS" />
                <CategoryCard imgsrc={d10} title="KIDS CASUALS" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
