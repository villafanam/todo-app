import React, { useContext } from 'react';
import {When} from 'react-if';

import { AuthContext } from '../../Context/Auth';

const Auth =  ({capability, children}) => {

  //static contextType = LoginContext;
  const { loggedIn, can } = useContext(AuthContext);

    const isLoggedIn = loggedIn;
    const canDo = capability ? can(capability) : true;
    const okToRender = isLoggedIn && canDo;

    return (
      <When condition={okToRender}>
        {children}
      </When>
    );
  
}

export default Auth;
