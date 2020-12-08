import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Content from "../components/bodyComponents/Landing/Content";
import Products from "../components/bodyComponents/Products/Products";
import Product from "../components/bodyComponents/Products/Product";
import BlogMain from "../components/bodyComponents/Blog/BlogMain";
import BlogArticle from "../components/bodyComponents/Blog/BlogArticle";
import About from "../components/bodyComponents/About";

const Body = (props) => {
    return (
        <main>
                <Switch>
                    <Route path="/products/categories/:name">
                        <Products products = {props.products} setProducts={props.setProducts} />
                    </Route>
                    <Route path="/products/:id">
                        <Product/>
                    </Route>
                    <Route path="/products">
                        <Products products = {props.products} setProducts={props.setProducts}/>
                    </Route>
                    <Route path="/blog/:articleId">
                        <BlogArticle/>
                    </Route>          
                    <Route path="/blog">
                        <BlogMain/>
                    </Route>          
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/">
                        <Content/>
                    </Route>
                </Switch>
        </main>
    );
};

export default Body;