import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { StateProvider } from './contexts/states';
import { getInitialState, mainReducer } from './contexts/reducer';


ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={ getInitialState() } reducer={ mainReducer }>
            <App/>
        </StateProvider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);

reportWebVitals();
