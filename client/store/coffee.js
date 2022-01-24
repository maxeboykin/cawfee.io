import Axios from 'axios';


//action types
const SET_COFFEES = 'SET_COFFEES';
const CREATE_COFFEE = 'CREATE_COFFEE';
const REMOVE_COFFEE = 'REMOVE_COFFEE';
const UPDATE_COFFEE = 'UPDATE_COFFEE';

//action creators
export const _setCoffees = (coffees) => ({
  type: SET_COFFEES,
  coffees
});
export const _createCoffee = (coffee) => ({
  type: CREATE_COFFEE,
  coffee
});
export const _removeCoffee = (coffee) => ({
  type: REMOVE_COFFEE,
  coffee
});
export const _updateCoffee = (coffee) => ({
  type: UPDATE_COFFEE,
  coffee
});

//async creators
export const fetchCoffees = () => {
  return async (dispatch) => {
    const { data: coffees } = await Axios.get('/api/coffee');
    dispatch(_setCoffees(coffees));
  }
}

export const createCoffee = (newCoffee, history) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const { data: created } = await Axios.post('/api/coffee', {newCoffee}, {
      headers: {
        authorization: token
      }
    });
    dispatch(_createCoffee(created));
    history.push('/');
  }
}

export const removeCoffee = (coffeeId, history) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const {data: removed} = await Axios.delete(`/api/coffee/${coffeeId}`, {
      headers: {
        authorization: token
      }
    })
    dispatch(_removeCoffee(removed));
    history.push('/');
  }
}

export const updateCoffee = (coffee, history) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const {data: updated} = await Axios.put(`/api/coffee/${coffee.id}`, {coffee}, {
      headers: {
        authorization: token
      }
    })
    dispatch(_updateCoffee(updated));
    history.push('/');
  }
}

//reducer
export default function (state = [], action) {
  switch(action.type){
    case SET_COFFEES:
      return action.coffees;
    case CREATE_COFFEE:
      return [...state, action.coffee];
    case REMOVE_COFFEE:
      return [...state.filter(coffee => coffee.id !== action.coffee.id)];
    case UPDATE_COFFEE:
      return state.map(coffee => coffee.id === action.coffee.id ? action.coffee : coffee);
    default:
      return state;
  }
}
