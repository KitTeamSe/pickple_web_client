import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store/store";
import Router from "./routers/Router";
import "bootstrap/dist/css/bootstrap.min.css"
import { hot } from 'react-hot-loader'
import "./assets/css/reset.css"

const App = () => {

  return (
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router/>

      
    </ConnectedRouter>
  </Provider>
  )
};
 
    export default hot(module)(App);