import React ,{useEffect,useState}from 'react'
import {getViewProduct,getAllProduct} from '../../api/api'
export default function ProductView(props) {
    const [product, setProduct] = useState()
    const id = props.match.params.id
   const fecthProduct = async () =>{
        let result = await getAllProduct()
        // console.log(result);
        result.data.filter(element => {
            console.log(element)
         
        });
       
    }
    useEffect(() => {
        
        fecthProduct()
        
    }, [])
    return (
        <div>
            ProductView
        </div>
    )
}
