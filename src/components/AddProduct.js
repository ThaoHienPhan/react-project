import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


export const AddProduct = () => {{
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const {addProduct} = useContext(GlobalContext);
    const navigate = useNavigate();
    const onSubmit = () =>{
        const newProduct = {
            id: uuid(),
            name: name,
            // category: category,
            // price: price
        }
        addProduct(newProduct);
        navigate('/');
    }

    const onChange = (e) =>{
        setName(e.target.value)}
        // setCategory(e.target.category);
        // setPrice(e.target.price)
    }

    return(
        <Form>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"></Input>             
                {/* <Label>Category</Label>
                <Input type='text' value={Category} onChange = {onChange} placeholder="Enter Category"></Input>
                <Label>Price</Label>
                <Input type='number' value={Price} onChange = {onChange} placeholder="Enter Price"></Input> */}
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to = "/" className="btn btn-danger ml-auto">Cancel</Link>
        </Form>
    )
}         