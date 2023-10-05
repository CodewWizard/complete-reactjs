import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 'p1',
    title: 'samsung s23'
  },
  {
    id: 'p2',
    title: 'iphone 15'
  }
]

export const ProductsPage = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((prod)=>(
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
