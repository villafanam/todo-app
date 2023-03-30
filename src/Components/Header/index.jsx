import { createStyles, Flex, Navbar } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../Login';

const useStyles = createStyles((theme) => ({
  navBar: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    height: '100%',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.sm,
  },
  link: {
    textDecoration: 'none',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.sm,
    color: theme.colors.gray[0],
  }
}));


const Header = () => {
  const { classes } = useStyles();

  return (
    <header>
      <Navbar className={classes.navBar} >
        <Flex
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <NavLink className={classes.link} to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
          <NavLink className={classes.link} to="settings" style={{ textDecoration: 'none' }}>Settings</NavLink>
          <Login />
        </Flex>
      </Navbar>
    </header>

  );
};

export default Header;
