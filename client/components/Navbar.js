import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = () => {
  const isLoggedIn = useSelector(state => !!state.auth.id);
  const isAdmin = useSelector(state => state.auth.isAdmin);
  const userId = useSelector(state => state.auth.id);
  //const localCart = useSelector(state => state.localCart);
  //const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  }




}
