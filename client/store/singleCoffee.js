import Axios from 'axios';


//action types
const SET_COFFEE = 'SET_COFFEE';
const CLEAR = 'CLEAR';

//action creators
export const _setCoffee = (coffee) => ({
  type: SET_COFFEE,
  coffee
})

export const _clearCoffee = () => ({
  type: CLEAR
})

export const fetchCoffee = (coffeeId) => {
  return async (dispatch) => {
    const {data: coffee} = await Axios.get(`api/coffee/${coffeeId}`);
    dispatch(_setCoffee(coffee));
  }
}

export const clearCoffee = () => {
  return async (dispatch) => {
    dispatch(_clearCoffee());
  }
}

