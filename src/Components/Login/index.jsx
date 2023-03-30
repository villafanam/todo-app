import { Button, TextInput, PasswordInput } from '@mantine/core';
import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from '../../Context/Auth';


const Login = () => {
  const { loggedIn, login, logout } = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'username' ? setUsername(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <When condition={loggedIn}>
        {/* <button onClick={logout}>Log Out</button> */}
        <Button color="red" onClick={logout}>Log Out</Button>
      </When>
      <When condition={!loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          {/* <TextInput placeholder='UserName' onChange={handleChange} /> */}
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          {/* <PasswordInput
            placeholder="Password"
            label="Password"
            onChange={handleChange}
          /> */}

          <button>Login</button>
        </form>
      </When>
    </>
  );
};


export default Login;







