import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './helper/PrivateRoute'
import React from "react";
import "./App.scss";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from "./components/logout/Logout";
import Product_Table from './components/product/Product'
import Product_View from './components/product/ProductView'
//import PrivateRoute from './helper/PrivateRoute'


var routes = {
  login: '/login',
  register: '/register',
  logout:'/logout',
  product:'/product',
  home:'/home',
  product:'/product',
  product_view:'/product_view/:id'

}

function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <Switch>
            <Redirect exact from="/" to={routes.login}></Redirect>
            <Route exact path={routes.login} component={Login}></Route>
            <Route exact path={routes.register} component={Register}></Route>
          </Switch>
        </div>
        <div className="container">
          <Switch>
              <PrivateRoute exact path={routes.home} component={Home}></PrivateRoute>
              <PrivateRoute exact path={routes.logout} component={Logout}></PrivateRoute>
              <PrivateRoute exact path={routes.product} component={Product_Table}></PrivateRoute>
              <PrivateRoute exact path={routes.product_view} component={Product_View}></PrivateRoute>

              {/* <PrivateRoute exact path={routes.create} component={Create}></PrivateRoute>
              <PrivateRoute exact path={routes.edit} component={Edit}></PrivateRoute> */}
          </Switch>
      </div>
      <Footer />
      
    </div>
  );
}
export default App;
