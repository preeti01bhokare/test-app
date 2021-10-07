import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/Components/Common/header';
import Home from '../src/Components/home';
import Login from '../src/Components/Auth/login';
import Signup from '../src/Components/Auth/signup';
import Userlist from '../src/Components/User/userlist';
import Add from '../src/Components/User/add';
import Edit from '../src/Components/User/edit';
import Pagenotfound from '../src/Components/pagenotfound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class Root extends React.Component {

  render() {
      return(
      <BrowserRouter basename={'/'} >
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/signup" component={Signup} />
        <Route exact={true} path="/userlist" component={Userlist} />
        <Route exact={true} path="/add_user" component={Add} />
        <Route exact={true} path="/edit_user" component={Edit} />
        <Route component={Pagenotfound} />
      </Switch>
      </BrowserRouter>
    );
  }
  }
  
  ReactDOM.hydrate(<Root />, document.getElementById('root'))