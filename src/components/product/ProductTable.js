import React from 'react'
import { Link } from "react-router-dom";
export default function ProductTable(props) {

    return (
        <div className="card text-center">
            <div className="card-body">
            <div className="row">
                <div className="col-12">
                    <h2>Product</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">รายชื่อสินค้า</th>
                            <th scope="col">ราคา</th>
                            <th scope="col">Stock</th>
                            {/* <th scope="col">รายละเอียด</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.product.map((item,index)=>(
                            <tr >
                                <th scope="row">{ index + 1 }</th>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                {/* <td>
                                    <Link to={`/product_view/${item._id}`}>
                                        <img className="img-calculate" width="30" src={process.env.PUBLIC_URL+"images/product/detail.png"}></img>
                                    </Link>
                                </td> */}
                            </tr>    
                            ))
                        }
                        
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    

    )
}

