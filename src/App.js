import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import {
  Home,
  ArticleDetails,
  NavHeader
} from './demo';

import configureStore from './store';
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <NavHeader></NavHeader>
        <Route exact path="/" component={Home} />
        <Route path="/article/:id" component={ArticleDetails}/>
      </div>
    </Router>
  </Provider>
);



export default App;