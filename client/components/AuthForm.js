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


export const Login = () => {
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const username = event.target.username.value.toLowerCase();
    const password = event.target.password.value;
    dispatch(authenticate(username, password, 'login'));
  };

return (
  <div>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            Password:
          </label>
          <input name="password" type="text" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error & error.response && <div>{error.response.data}</div>}
      </form>
    </div>
  </div>
)
}


export const Signup = () => {
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = event => {
    event.preventDefault();
    const username = event.target.username.value.toLowerCase();
    const password = event.target.password.value;
    const email = event.target.email.value;
    dispatch(authenticate(username, password, 'signup', email));
    if (username && password && email) history.push("/coffee");
  };

return (
  <div>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            Password:
          </label>
          <input name="password" type="text" />
        </div>
        <div>
          <label htmlFor="email">
            Email:
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error & error.response && <div>{error.response.data}</div>}
      </form>
    </div>
  </div>
)
}
