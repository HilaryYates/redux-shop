import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));

    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);
  return (
    <div>
      <div className='ui grid container'>
        <div className='ui placeholder segment'>
          <img width={500} src={product.image} />
          <div>{product.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
