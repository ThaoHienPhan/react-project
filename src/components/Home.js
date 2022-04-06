import React from 'react';
import { Add } from './Add';
import { ProductList} from './ProductList';

export const Home = () => {
    return(
        <div>
            <ProductList />
            <Add />
        </div>
    )
}