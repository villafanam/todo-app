//showComplete
//sort
//displayCount

import React, { useState } from "react";

export const SettingContext = React.createContext();

const SettingProvider = ({ children }) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState('false');
  const [sort, setSort] = useState('difficulty');
  const [list, setList] = useState([]);

  const values = {displayCount, showComplete, sort, list, setList};

  return (
    <SettingContext.Provider value={values}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;