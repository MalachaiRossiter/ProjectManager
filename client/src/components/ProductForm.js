import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = (props) => {
    
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //runs once form is submitted
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('https://localhost:8000/api/productCreate', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                // we will update the lifted state of our people array 
                //    to include the current value in state plus the single 
                //    new object created and returned from our post request.
                setProduct([...product, res.data]);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Product Title Please</label><br/>
                    <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Product Price Please</label><br/>
                    <input type="text" onChange={(e)=> setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Product Description Please</label><br/>
                    <input type="text" onChange={(e)=> setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default ProductForm;