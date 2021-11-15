import React, { useEffect, useState } from "react";
import CategoryCard from "./Cards/CategoryCard";
import Loading from "./Loading";
import d1 from "./images/CateroryImage/d1.jpg";

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
            <div className="col-10 top-elements" style={{ marginLeft: "11%" }}>
              <div className="row col-sm-6 gy-4">
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
                <CategoryCard imgsrc={d1} title="MENS" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
