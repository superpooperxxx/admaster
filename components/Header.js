import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux';
const Header = ( props ) => {
        return (  
                <header>
                        <div className="logo"><Link href="/"><a>Products</a></Link></div>
                        <div className="shopping-cart__container">
                                <Link href="/shopping-cart"><a>
                                        <FaShoppingCart className="shopping__cart" />
                                        <div className={ props.amount === 0 ? 'shopping-card__amount--hidden' : 'shopping-card__amount'} >{ props.amount }</div>
                                </a></Link>
                                <div className="total__price">{ props.price } $</div>
                        </div>
                </header>
        );
}
const mapStateToProps = state => {
        return {
                amount: state.cartAmount(),
                price: state.totalPrice()
        }
}
export default connect(mapStateToProps)(Header);