import React, { useState } from 'react';
const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    //runs once form is submitted
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description})
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