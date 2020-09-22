import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from './../../firebase';
import { useStateValue } from './../../Redux/StateProvider';
import { actionTypes } from './../../Redux/reducer';
function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-650-80.jpg.webp"
          alt=""
        />
        <h1>Sign in to Local Host HQ </h1>
        <p>localhost.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
