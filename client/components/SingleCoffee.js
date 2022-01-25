import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { connect } from 'react-redux'
import { fetchCoffee, clearCoffee } from '../store/singleCoffee';
import { me } from '../store/auth';



const SingleCoffee = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  const userId = useSelector(state => state.auth.id);
  const targetCoffee = useSelector(state => state.coffee);
  //const cart = useSelector(state = state.cart);



  return (

  )

}

export default SingleCoffee;


