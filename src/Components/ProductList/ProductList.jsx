import React, { useEffect, useState } from 'react'
import './ProductList.scss'
import ProductCard from '../Common/ProductCard/ProductCard'

const ProductList = ({ products, categories, getCategBasedProdList }) => {
    const [selectedCateg, setSelectedCateg] = useState()

    useEffect(() => {
        if (selectedCateg !== '' || selectedCateg !== undefined) {
            getCategBasedProdList(selectedCateg)
        }
    }, [selectedCateg])


    return (
        <div className='main-container'>
            <div className='selector-container'>
                <select id="category" name="category" placeholder='Select category' onChange={(e) => setSelectedCateg(e.target.value)}>
                    <option value="" disabled selected>Select category</option>
                    {categories && categories.map((category, index) => {
                        return (<option key={index} value={category}>{category}</option>)
                    })}
                </select>
            </div>
            <div className='products-container'>
                {products && products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList