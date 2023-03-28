import { createStyles } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.blue[9],
    color: theme.colors.gray[0],
  }
}));


const Header = () => {
  const { classes } = useStyles();

  return (
    <header>
      <h1 className={classes.h1}>Home</h1>
    </header>
  );
};

export default Header;
