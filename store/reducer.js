const initialState = {
        cartAmount: function(){
                return this.cart.length;
        },
        totalPrice: function(){
                let total = 0;
                this.cart.forEach( item => {
                        total += +item.amount * item.price
                })
                return total;
        },
        products: [
                {
                        title : "Product 1",
                        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        price : "128",
                        id : "15"
                },
                {
                        title : "Product 2",
                        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        price : "9",
                        id : "26"
                },
                {
                        title : "Product 3",
                        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        price : "146",
                        id : "23"
                },
                {
                        title : "Product 4",
                        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        price : "256",
                        id : "74"
                },
                {
                        title : "Product 5",
                        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        price : "28",
                        id : "89"
                }
        ],
        cart: []
}


const reducer = (state = initialState, action) => {
        switch(action.type){
                case 'ADD_TO_CART': 
                        let cart = state.cart;
                        if(state.cart.length === 0){
                                cart.push(action.product);
                        }else{
                                const check = () => {
                                        for(let i = 0; i < state.cart.length; i++){
                                                if(cart[i].id === action.product.id){
                                                        cart[i].amount = action.product.amount;
                                                        return true;
                                                }
                                        }
                                        cart.push(action.product);
                                }
                                check();
                                
                        }
                        return {
                                ...state,
                                cart: cart
                        }
                case 'DELETE_FROM_CART':
                                let newCart = [];
                                state.cart.forEach( item => {
                                        if(item.id !== action.id){
                                                newCart.push(item);
                                        }

                                })
                                return {
                                        ...state,
                                        cart: newCart
                                }
                case 'CHANGE_AMOUNT':
                                let updatedCart = [];
                                state.cart.forEach( item => {
                                        if(item.id === action.id){
                                                item.amount = action.value;
                                        }
                                        updatedCart.push(item)
                                })
                                return {
                                        ...state,
                                        cart: updatedCart
                                }
                }
                return state;
}



export default reducer;