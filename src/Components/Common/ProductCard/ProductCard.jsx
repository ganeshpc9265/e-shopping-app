import React from 'react'
import './ProductCard.scss'

const ProductCard = ({ product }) => {
    return (
        <div className='card-container'>
            <img src={product?.images[0]} alt="Lamp"></img>
            <div className='bottom-sec'>
                <h5>{product?.title}</h5>
                <div className='description'>Product description : {product?.description}</div>
                <div className='description'>Product description : {product?.description}</div>
                <h4>$ {product?.price}</h4>
            </div>
        </div>
    )
}

export default ProductCard