import React, {Component, Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import AllCoffees from './components/AllCoffees';
import Home from './components/Home';
import {me} from './store'
import SingleCoffee from './components/SingleCoffee';
import SingleUser from './components/SingleUser';
import AllUsers from './components/AllUsers';
import CartView from './components/cartView';
import CheckoutSummary from './components/CheckoutSummary';
import ls from 'local-storage';


const Routes = () => {
  const isLoggedIn = useSelector(state => !! state.auth.id);
  const isAdmin = useSelector(state => state.auth.isAdmin)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div className="main-container">
    {isLoggedIn ? (
      isAdmin ? (
        //this is for admins only
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path = "/coffee" component={AllCoffees} />
          <Route exact path="/coffee/:coffeeid" component={SingleCoffee} />
          <Route exact path='/users' component={AllUsers} />
          <Route exact path='/users/:userId' component={SingleUser} />
          {/* <Route exact path='/cart' component={CartView} />
          <Route exact path='/cart/checkout' component={CheckoutSummary} /> */}
            <Redirect to="/home" />
          </Switch>
      ) :
      //for users not admins
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path = "/coffee" component={AllCoffees} />
        <Route exact path="/coffee/:coffeeid" component={SingleCoffee} />
        {/* <Route exact path='/cart' component={CartView} />
        <Route exact path='/cart/checkout' component={CheckoutSummary} /> */}
        <Redirect to="/home" />
      </Switch>
    ) : (
      <Switch>
        <Route path='/' exact component={AllCoffees} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path = "/coffee" component={AllCoffees} />
        <Route exact path="/coffee/:coffeeId" component={SingleCoffee} />
        {/* <Route exact path='/cart' component={CartView} />
        <Route exact path='/cart/checkout' component={CheckoutSummary} /> */}
            <Redirect to='/coffee' />
      </Switch>
    )}
    </div>
  )
}

export default withRouter(Routes);
