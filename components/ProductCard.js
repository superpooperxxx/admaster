import React from 'react';

import { connect } from 'react-redux';

class ProductCard extends React.Component{
        state = {
                id: this.props.id,
                title: this.props.title,
                price: +this.props.price,
                amount: 1
        }
        amountHandler = (e) => {
                if(e.target.validity.valid){
                        this.setState({amount: +e.target.value});
                }
        }
        render(){
                return (  
                        <div className="product__card">
                                <h3 className="product__title">{ this.props.title }</h3>
                                <p className="product__description">{ this.props.description }</p>
                                <div className="product__price">Price: { this.props.price } $</div>
                                <div className="add__block">
                                        <div className="add__btn" id={ this.props.id } onClick={() => this.props.addToCart(this.state)}>Add to cart</div>
                                        <form>
                                                <input type="number" min="1" value={this.state.amount} onChange={this.amountHandler}/>
                                        </form>
                                </div>
                        </div>
                );
        }
}
const mapDispatchToProps = dispatch => {
        return {
                addToCart: (value) => dispatch({type: 'ADD_TO_CART', product: value})
        }
}
export default connect(null, mapDispatchToProps)(ProductCard);