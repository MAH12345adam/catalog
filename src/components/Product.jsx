import React from "react";

const Product = ({image, price, name}) => {
  return (
    <div className="content__product">
      <div>
        <img width="350" src={image} alt="product" />
      </div>
      <h3 className="product-name">
        Название: <span>{name}</span>
      </h3>
      <div className="dflex">
        <p className="product-price">
          Цена: <span>{price}</span>
        </p>
        <button>В корзину</button>
      </div>
    </div>
  );
};

export default Product;
