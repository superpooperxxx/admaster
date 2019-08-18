import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartCard from './ShoppingCartCard';

const ShoppingCart = ( props ) => {
        return (  

                <div className="shopping__cart">
                        {
                                props.cart.map( (item, id) => {
                                        return <ShoppingCartCard key={id}
                                                id={item.id}
                                                title={item.title}
                                                price={item.price}
                                                amount={item.amount}/>
                                })
                        }
                </div>
        );
}
const mapStateToProps = state => {
        return {
                cart: state.cart,
        }
}
export default connect(mapStateToProps)(ShoppingCart);