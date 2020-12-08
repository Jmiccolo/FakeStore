import React, {useEffect} from 'react';
import axios from 'axios';

const Products = (props) => {
    useEffect(function(){
        if(props.products.length === 0){
            axios["get"]("https://fakestoreapi.com/products")
                .then(products => props.setProducts(products));
        }
    });
    return (
        <div>
            
        </div>
    );
};

export default Products;