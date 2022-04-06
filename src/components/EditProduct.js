import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Link, useNavigate } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditProduct = (props) => {
    const [selectedProduct, setSelectedProducts] = useState({
        id: '',
        name: '',
        category:'',
        price:''
    });
    const {products, editProduct} = useContext(GlobalContext);
    const navigate = useNavigate();
    const currentProductId = props.match.params.id;

    useEffect(() => {
        const productId = currentProductId;
        const selectedProduct = products.find(product => productId === productId)
        setSelectedProducts(selectedProduct)
    }, [currentProductId,products])

    const onSubmit = () =>{
        EditProduct(selectedProduct)
        navigate('/');
    }

    const onChange = (e) =>{
        setSelectedProducts({...selectedProduct, [e.target.name]: e.target.value})
    }
    return(
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text'value={selectedProduct.name} onChange={onChange} placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type='submit'>Edit Name</Button>
            <Link to = "/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}