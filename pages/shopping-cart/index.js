import React from 'react';
import '../../css/main.css';
import Header from '../../components/Header';
import Cart from '../../components/ShoppingCart';
import Page from '../../components/page';



const ShoppingCart = () => {
        return (
                <>
                        <Header />
                        <main className="cart__page">
                                <h2>Shopping Cart</h2>
                                <Cart />
                        </main>
                </>
        );
}
 
export default Page(ShoppingCart);