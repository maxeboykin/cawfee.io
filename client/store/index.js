import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers imported
import auth from './auth'
import coffees from './coffee';
import coffee from './singleCoffee'
import users from './users'
import user from './singleUser'
//import cart from './cart'
//import localcart from './'

const reducer = combineReducers({
  auth,
  coffees,
  coffee,
  users,
  user,

})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store;
export * from './auth'


