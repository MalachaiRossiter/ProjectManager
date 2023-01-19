import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from './ProductForm';

const Update = (props) => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            setProduct(res.data);
            setLoaded(true)
        })
    }, [])
    
    const UpdateProduct = (productParam) => {
        axios.put(`http://localhost:8000/api/product/${id}`, productParam)
        .then(res => console.log(res));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            {
                loaded && <ProductForm onSubmitProp={UpdateProduct}
                inititalTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>
            }
        </div>
    )
}
export default Update;