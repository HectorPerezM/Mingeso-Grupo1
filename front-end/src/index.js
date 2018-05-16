import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Initial action to load product list from API
import { getProducts } from './actions/productActions';
// App component
import App from './App';

// Load product list from API as soon as application initiates

ReactDOM.render(
        <App />,
    document.getElementById('root')
);
