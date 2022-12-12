import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.productReducer.products);
  // console.log(products);
  const renderList = products.map((product) => {
    return (
      <div className='four column wide' key={product.id}>
        <div className='ui link cards'>
          <div className='card'>
            <div className='image'>
              <img src={product.image} />
              <div className='content'>
                <div className='header'>{product.title}</div>
                <div className='meta price'>${product.price}</div>
                <div className='meta'>{product.category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{renderList}</div>;
};

export default ProductComponent;
