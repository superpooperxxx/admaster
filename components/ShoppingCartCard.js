import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaRedo } from 'react-icons/fa';
import { connect } from 'react-redux';
class ShoppingCartCard extends Component{
        state = {
                amount: this.props.amount
        }
        amountHandler = (e) => {
                if(e.target.validity.valid){
                        this.setState({amount: +e.target.value});
                }
        }
        render(){
                return (  
                        <div className="shopping-cart__card">
                                <span className="title">{ this.props.title }</span>
                                <span className="price">Price: { this.props.price } $</span>
                                <form>
                                        <input type="number" min="1"  placeholder={ this.props.amount } onChange={this.amountHandler}/>
                                </form>
                                <FaRedo className="update__btn" onClick={() => this.props.changeAmount(this.props.id, this.state.amount)}/>
                                <FaTimes className="delete__btn" onClick={() => this.props.deleteFromCart(this.props.id)}/>
                        </div>
                );   
        }    
}
const mapDispatchToProps = dispatch => {
        return {
                deleteFromCart: (id) => dispatch({type: 'DELETE_FROM_CART', id: id}),
                changeAmount: (id, value) => dispatch({type: 'CHANGE_AMOUNT', id: id, value: value})
        }
}
export default connect(null, mapDispatchToProps)(ShoppingCartCard);