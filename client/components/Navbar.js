import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { me } from "../store";

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

  useEffect(() => {
    dispatch(me());
  }, [])

    return (
      <div className='navbar-outer'>
        <div className='NavBarContainer'>
          <img src='/Media/logo.png' />
          <nav>
            {isLoggedIn ? (
              isAdmin ? (
                <div className='LoginOut'>
                  <Link to="/home">Home</Link>
                  <Link to="/coffee"><span>Coffee</span></Link>
                  <Link to="/users">Users</Link>
                  <a href='#' onClick={handleClick}>Logout</a>
                </div>
              ) : (
                <div className='LoginOut'>
                <Link to="/home">Home</Link>
                <Link to="/coffee"><span>Coffee</span></Link>
                <a href='#' onClick={handleClick}>Logout</a>
              </div>
              )
            ) : (
              <div className='LoginOut'>
                  <Link to="/home">Home</Link>
                  <Link to="/coffee"><span>Coffee</span></Link>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </div>
            )}
            <div className='CartButtonContainer'>
              <Link to="/cart" style={{textDecoration:"none"}}>
                <img src= '/Media/bag.png' />
                {/* <div className="CartCounter"><p>{qty}</p></div> */}
              </Link>
            </div>
          </nav>
        </div>
        <div className='nav-line'>
          <hr></hr>
        </div>
        </div>
    )

}
export default Navbar;
