import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CategoryList from "./CategoryList";

const SearchBar = (props) => {
    const [SearchAutofill, setSearchAutofill] = useState([]);
    const categories = ["men clothing", "women clothing", "jewelry", "electronics"];
    function handleChange(e){
        e.preventDefault();
        if(e.target.value === ""){
            setSearchAutofill([]);
        }else{
        setSearchAutofill([{title:"..."}]);
        const search = e.target.value.toUpperCase();
        axios["get"]("https://fakestoreapi.com/products")
            .then(res => {setSearchAutofill(
                        res.data
                            .filter(val => {
                                let correctnum = 0;
                                for(let index in search){
                                if(val.title[index].toUpperCase() === search[index]){
                                    correctnum++;
                                    }
                                }
                                if(correctnum === search.length){
                                    return true
                                }
                                return false
                            })
                            .sort((a, b) => a.title > b.title ? 1 : -1)
            )});
    }}
    function handleSubmit(e){
        e.preventDefault();
        axios["get"]("https://fakestoreapi.com/products")
            .then(res => res.data.forEach(val=> console.log(val.title)));
    }
    const searchQueries = [];
    SearchAutofill.forEach(val =>{
        searchQueries.push(<div className="search-item"><Link to={`/products/${val.id}`}>{val.title}</Link></div>);
    })
    function handleBlur(e){
        e.preventDefault();
        setSearchAutofill([]);
    }
    return (
        <nav className="searchBar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="Search"></label>
                <div className="autocomplete" width="200px" overflow="hidden">
                <input type="text" name="Search" autocomplete="off" onChange={handleChange} id="Search"/>
                {searchQueries}
                </div>
            </form>
            <div>
            <CategoryList categories={categories} />
            </div>
        </nav>
    );
};

export default SearchBar;