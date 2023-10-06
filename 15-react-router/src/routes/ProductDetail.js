import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const params = useParams();

  return (
    <>
        <h1>Product Details!</h1>
        <p>{params.productId}</p>
        <p><Link to='..' >Back to home</Link></p>
        <p><Link to='..' relative='path'>lift up</Link></p>
    </>
  )
}

export default ProductDetailPage;