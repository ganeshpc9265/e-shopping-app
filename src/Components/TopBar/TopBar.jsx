import React, { useEffect, useState } from 'react'
import './TopBar.scss'
import axios from 'axios'

const TopBar = ({ getSearchList }) => {
    const [inputVal, setInputVal] = useState('')
    const [searchedProducts, setSearchedProducts] = useState([])

    const productSearch = async (inputVal) => {
        let url = `https://dummyjson.com/products/search?q=${inputVal}`
        let res = await axios.get(url)
        if (res?.status === 200) {
            setSearchedProducts(res?.data?.products)
        }
    }

    useEffect(() => {
        let pSearch = setTimeout(() => {
            productSearch(inputVal)
        }, 2000);

        return () => {
            clearTimeout(pSearch)
        }

    }, [inputVal])

    useEffect(() => {
        getSearchList(searchedProducts)
    }, [searchedProducts])



    return (
        <div className='topbar-container'>
            <h1>MoBooM</h1>
            <input type="search" id="psearch" name="psearch" onChange={(e) => setInputVal(e.target.value)}></input>
            <div className='nav-items'>
                <span>Store</span>
                <span>Account</span>
                <span>Wishlist</span>
                <span>Basket</span>
            </div>

        </div>
    )
}

export default TopBar