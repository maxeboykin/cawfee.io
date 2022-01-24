import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../store";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
       <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};


