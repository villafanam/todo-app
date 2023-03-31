import { createStyles, Group, Navbar } from '@mantine/core';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../Login';
import { AuthContext } from '../../Context/Auth';


const useStyles = createStyles((theme) => ({
  navBar: {
    backgroundColor: theme.colors.blue[7],
    color: theme.colors.gray[0],
    height: '100%',
    padding: theme.spacing.md,
  },
  link: {
    textDecoration: 'none',
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
  }
}));


const Header = () => {
  const { classes } = useStyles();
  const { loggedIn } = useContext(AuthContext);

  return (
    <header>
      <Navbar className={classes.navBar} >
        <Group position="apart">
          <Group>
            <NavLink className={classes.link} to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
          { loggedIn &&  <NavLink className={classes.link} to="settings" style={{ textDecoration: 'none' }}>Settings</NavLink>}
          </Group>

          <Login />
        </Group>
        
      </Navbar>
    </header>

  );
};

export default Header;
