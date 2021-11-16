import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { ProductCard } from "react-ui-cards";
const Men = () => {
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
        <ProductCard
          photos={[
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
            "https://i.imgur.com/jRVDeI8.jpg",
            "https://i.imgur.com/raPe27t.jpg",
            "https://i.imgur.com/IpEsYSH.jpg",
          ]}
          price="$99"
          productName="Headphones"
          description="Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet."
          buttonText="Add to cart"
          url="https://github.com/nukeop"
        />
      )}
    </div>
  );
};

export default Men;
