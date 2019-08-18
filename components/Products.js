import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../components/ProductCard';
class Products extends Component {
        render() { 
                return (  
                        <section className="products__section">
                                {
                                        this.props.products.map(( item, id ) => {
                                                return <ProductCard key={id}
                                                                id={item.id}
                                                                title={item.title}
                                                                description={item.description}
                                                                price={item.price}
                                                                />
                                        })
                                }
                        </section>
                );
        }
}
const mapStateToProps = state => {
        return {
                products: state.products
        }
}
export default connect(mapStateToProps)(Products);