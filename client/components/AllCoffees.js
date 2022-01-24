import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchCoffees } from '../store/plants'
import { fetchPlant } from '../store/singlePlant';
import { Link } from "react-router-dom";
import { me } from '../store/auth';
import ls from 'local-storage';
import { addItem, fetchCart } from '../store/cart';
import { addLocalItem } from '../store/LocalCart';

const AllCoffees = () => {
  const dispatch = useDispatch();
  const

  useEffect(() => {
    dispatch(fetchCoffees());
    dispatch(me());
  }, []);

  const handleAddToCart = (event) =>{

  }

  return (

  );
}

export default AllCoffees;
