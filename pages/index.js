import React, { Component } from 'react';
import '../css/main.css';
import Header from '../components/Header';
import Page from '../components/page';
import Products from '../components/Products';

import { createStore } from 'redux';
import reducer from '../store/reducer';





class index extends Component {
        render() { 
                return (  
                        <>
                                <Header />
                                <main className="product__page">
                                        <h2>Products</h2>
                                        <Products />
                                </main>
                        </>
                );
        }
}
 
export default Page(index);