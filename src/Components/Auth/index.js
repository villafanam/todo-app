import React, { useContext } from 'react';
import {When} from 'react-if';

import { LoginContext } from '../../Context/Auth';

const Login =  ({capability, children}) => {

  //static contextType = LoginContext;
  const { loggedIn, can } = useContext(LoginContext);

    const isLoggedIn = loggedIn;
    const canDo = capability ? can(capability) : true;
    const okToRender = isLoggedIn && canDo;

    return (
      <When condition={okToRender}>
        {children}
      </When>
    );
  
}

export default Login;
