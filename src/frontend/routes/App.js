import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Player from '../containers/Player';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFount from '../containers/NotFount';
import Detail from '../containers/Detail';
import List from '../containers/List'

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={isLogged ? Home : Login} />
        <Route exact path="/player/:id" component={isLogged ? Player : Login} />
        <Route exact path="/list/:name" render={(props ) => <List isHome {...props} />} />
        <Route exact path="/detail/:id" component={isLogged ? Detail : Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFount} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
