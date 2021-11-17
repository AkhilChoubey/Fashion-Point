import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { ProductCard } from "react-ui-cards";
import { useCart } from "react-use-cart";
import MenItems from "./constants/MenItems";
const Men = () => {
  const [isLoading, setLoading] = useState(true);

  const { addItem } = useCart();

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
        <div>
          {MenItems.map((m) => (
            <div>
              <ProductCard
                photos={[m.image]}
                price={m.price}
                productName={m.name}
                description={m.description}
              />
              <button onClick={() => addItem(m)}>Add to cart</button>
            </div>
          ))}
          <ProductCard
            photos={[
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
            ]}
            price="Rs. 1000"
            productName="SHIRT"
            description="Clasic Shirt"
            buttonText="Add to cart"
            url="/cart"
          />
          <ProductCard
            photos={[
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
            ]}
            price="Rs. 1000"
            productName="SHIRT"
            description="Clasic Shirt"
            buttonText="Add to cart"
            url="https://github.com/nukeop"
          />
        </div>
      )}
    </div>
  );
};

export default Men;
