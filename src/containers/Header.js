import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../components/headerComponents/Navbars/Navbar';
import SearchBar from '../components/headerComponents/Navbars/SearchBar';
import Side from '../components/headerComponents/Navbars/Side';


const Header = (props) => {
    return (
            <header>
                <div className="title">
                    <h1>FAKESTORE</h1>
                </div>
                <Switch>
                <Route exact path="/products/:id">
                    <NavBar/>
                    <SearchBar setProducts={props.setProducts}/>
                    <Side/>
                </Route>
                <Route path="/">
                    <NavBar/>
                    <SearchBar/>
                </Route>
                </Switch>

            </header>
    );
};

export default Header;