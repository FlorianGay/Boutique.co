/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchProductList = async() => {
        try {
            const response = await axios.get('http://localhost:8080/api/products')
            setProductList(response.data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProductList()
    }, [])

    if (error) return <p>{error}</p>
    if (loading) return <p>Loading ...</p>

    return (
        <ProductContext.Provider value={{productList}}>
            {children}
        </ProductContext.Provider>
    )


}