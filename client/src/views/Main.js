import axios from 'axios';
import ProductForm from '../components/ProductForm';
import DisplayAll from '../components/DisplayAll';

const Main = (props) => {

        const createProduct = productParam => {
            axios.post('http://localhost:8000/api/product', productParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => console.log(err))
        }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr/>
            <DisplayAll/>
        </div>
    )
}
export default Main;