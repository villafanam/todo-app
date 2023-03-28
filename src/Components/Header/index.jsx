import { createStyles, Navbar, Text } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  navBar: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[0],
    height: '100%',
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.sm,
  }
}));


const Header = () => {
  const { classes } = useStyles();

  return (
    <header>
      {/* <h1 className={classes.h1}>Home</h1> */}
      <Navbar className={classes.navBar} >
        <Text>Home</Text>
      </Navbar>
    </header>
  );
};

export default Header;
