import React from 'react';
import {Provider} from 'react-redux';
import configureStore from "../store/store";
import App from "./app";


// debugger;
const Root = ({ configureStore }) => (
    <Provider store={configureStore}>
      <App />
    </Provider>
  );
  
  export default Root;