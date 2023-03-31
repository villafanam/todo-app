import { Button, Group, TextInput, Flex } from '@mantine/core';
import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../../Context/Auth';


const Login = () => {
  const { loggedIn, login, logout } = useContext(AuthContext);
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
        <Button color="red" onClick={logout}>Log Out</Button>
      </When>

      <When condition={!loggedIn}>
        <form onSubmit={handleSubmit}>
          <Group position='right'>
            <TextInput
              placeholder='UserName'
              name="username"
              onChange={handleChange}
            />

            <TextInput
              placeholder="password"
              name='password'
              type='password'
              onChange={handleChange}
            />

            <Button color="gray.8" type='submit'>Log In</Button>

          </Group>
        </form>
      </When>
    </>
  );
};


export default Login;







