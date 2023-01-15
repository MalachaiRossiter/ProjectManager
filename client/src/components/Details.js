import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
const Details = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch( (err) => console.log(err));
    }, []);
    return (
        <div>
            <p>Product name: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
        </div>
    )
}
export default Details;