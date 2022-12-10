import React from "react";
import Product from "../components/Product";
import products from "../data/products.json";

import "../scss/components/_catalog.scss";

const Catalog = () => {
  const [openCart, setOpenCart] = React.useState(true);
  return (
    <div className="content">
      <div className="container">
        <div className="content__title">
          <h1>Товары</h1>
        </div>
        {
          openCart && (
            <div className="content__cart">
                <div>hello</div>
            </div>
          )
        }
        
        <div className="content__products">
          {products.map((item) => (
            <Product
              price={item.price}
              name={item.name}
              image={item.image}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
