import React from 'react';
import {Link} from 'react-router-dom';

const CategoryList = (props) => {
    const list = props.categories.map(val=>{
        return <li><Link to={`/products/categories/${val}`}>{val}</Link></li>
    })
    return (
        <ul>
            {list}
        </ul>
    );
};

export default CategoryList;