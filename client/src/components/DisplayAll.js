import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

const DisplayAll = (props) => {
    const [productList, setProductList] = useState([]);
        useEffect(() => {
            axios.get('http://localhost:8000/api/product')
            .then(res => {
                console.log(res.data)
                setProductList(res.data);
                
            })
            .catch((err) => console.log(err))
        }, [])

    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id !== productId));
    }

    return (
        <div>
            {productList && productList.map((product, index) => (
                    <div key={ index }>
                    {product.title}
                    <Link to={`/product/edit/${product._id}`}>Edit</Link>
                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)}/>
                    </div>
                ))
            }

        </div>
    )
}
export default DisplayAll;