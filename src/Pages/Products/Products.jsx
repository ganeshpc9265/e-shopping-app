import React, { useEffect, useState } from 'react'
import './Products.scss'
import Header from '../../Components/Header/Header'
import TopBar from '../../Components/TopBar/TopBar'
import ProductList from '../../Components/ProductList/ProductList'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        let url = 'https://dummyjson.com/products/categories'
        let res = await axios.get(url)
        if (res?.status === 200) {
            setCategories(res?.data)
        }
    }

    const getProductsList = async () => {
        let url = 'https://dummyjson.com/products'
        let res = await axios.get(url)
        if (res?.status === 200) {
            setProducts(res?.data?.products)
        }
    }

    useEffect(() => {
        getCategories()
        getProductsList()
    }, [])

    const getSearchList = (list) => {
        setProducts(list)
    }

    const getCategBasedProdList = async (selectedCateg) => {
        let url = `https://dummyjson.com/products/category/${selectedCateg}`
        let res = await axios.get(url)
        if (res?.status === 200) {
            setProducts(res?.data?.products)
        }
    }



    return (
        <>
            <TopBar getSearchList={getSearchList} />
            <Header />
            <ProductList products={products} categories={categories} getCategBasedProdList={getCategBasedProdList} />
        </>
    )
}

export default Products