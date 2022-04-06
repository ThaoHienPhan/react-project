import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import{
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'
import userEvent from '@testing-library/user-event';
export const ProductList = () => {
    const {products, removeProduct} = useContext(GlobalContext);
    return (
        <ListGroup className='container table table-striped'>
            <h2>Products</h2>
        {products.map(product => ( //chuyen di
            <ListGroupItem>
            <table class="table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td><Link className='btn btn-warning  ' to = {`./edit/${product.id}`}>Edit</Link></td>
                    <td><Button onClick={()=> removeProduct(product.id)} className='btn btn-danger ml-auto'>Delete</Button></td>
                    </tr>
                </tbody>
            </table>
            </ListGroupItem>
        )
            )}
        
        </ListGroup>
    )
}