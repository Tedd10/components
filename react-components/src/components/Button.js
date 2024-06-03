import React from 'react';

function Button(props) {
  return (
    <button className={props.isLoggedIn ? 'logout' : 'login'}>
      {props.isLoggedIn ? 'Logout' : 'Log In'}
    </button>
  )
}

export default Button;
