import React ,{useState,useEffect}from 'react'
import Product_Table from './ProductTable'
import {getAllProduct} from '../../api/api'

export default function Product() {
    const [product, setProduct] = useState([])
    const fetchProduct = async()=>{
        let result = await getAllProduct()
        // console.log(result.data);
        setProduct(result.data)
        
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <div>
            <Product_Table product={product}/>
        </div>
    )
}
