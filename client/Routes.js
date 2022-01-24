import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
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


