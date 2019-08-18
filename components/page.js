import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../store/reducer';
const store = createStore(reducer);
const page = (Page) => {
    return(
        class PageWrapper extends React.Component{
            render(){
                return(
                        <Provider store={store}>
                                <Page />
                        </Provider>
                )
            }
        }
    )
}
export default page;