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
import d11 from "./images/CateroryImage/d11.jpg";
import d12 from "./images/CateroryImage/d12.jpg";
import { Link } from "react-router-dom";
import BrandsCard from "./Cards/BrandsCard";
import { SiPuma } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { SiNike } from "react-icons/si";
import { SiReebok } from "react-icons/si";

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
              <div
                className="row gy-4"
                style={{ marginBottom: "5%", marginTop: "5%" }}
              >
                <CategoryCard to="/Men" imgsrc={d1} title="MENS" />
                <CategoryCard to="/Winter" imgsrc={d2} title="WINTER WEAR" />
                <CategoryCard to="/Casuals" imgsrc={d3} title="CASUALS" />
                <CategoryCard to="/Western" imgsrc={d4} title="WESTERN" />
                <CategoryCard to="/Moody" imgsrc={d5} title="MOODY" />
                <CategoryCard
                  to="/Traditional"
                  imgsrc={d6}
                  title="TRADITIONAL"
                />
                <CategoryCard
                  to="/SportsWear"
                  imgsrc={d7}
                  title="SPORTS WEAR"
                />
                <CategoryCard to="/Classics" imgsrc={d8} title="CLASSICS" />
                <CategoryCard to="/Basics" imgsrc={d9} title="BASICS" />
                <CategoryCard to="/Festive" imgsrc={d10} title="FESTIVE WEAR" />
                <CategoryCard to="Kids" imgsrc={d11} title="KIDS" />
                <CategoryCard
                  to="KidsCasuals"
                  imgsrc={d12}
                  title="KIDS CASUALS"
                />
                <h3 className="brand-title">FIND YOUR FAVOURITE BRANDS</h3>
                <BrandsCard id="1" name="Puma" to="/Puma" title={<SiPuma />} />
                <BrandsCard
                  id="2"
                  name="Adidas"
                  to="/Adidas"
                  title={<CgAdidas />}
                />
                <BrandsCard id="3" name="Nike" to="/Nike" title={<SiNike />} />
                <BrandsCard
                  id="4"
                  name="Reebok"
                  to="/Reebok"
                  title={<SiReebok />}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
