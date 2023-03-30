import { Text } from '@mantine/core';
import React from 'react';

const Footer = () => {
  return (
    <footer data-testid="footer" style={{width: '80%', margin: 'auto'}}>
     
      <Text align='right' mt="lg" >&copy;2023 Code Fellows</Text>
      </footer>
  );
};

export default Footer;