import { createStyles, Flex, Navbar } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  navBar: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    height: '100%',
    fontSize: theme.fontSizes.lg,
    padding: '5px',
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
          <NavLink  className={classes.navBar} to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
          <NavLink className={classes.navBar} to="settings" style={{ textDecoration: 'none' }}>Settings</NavLink>
        </Flex>
      </Navbar>
    </header>

  );
};

export default Header;
