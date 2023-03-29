//showComplete
//sort
//displayCount

import React, { useEffect, useState } from "react";

export const SettingContext = React.createContext();

const SettingProvider = ({ children }) => {

  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState('false');
  const [sort, setSort] = useState('difficulty');
  

  const savePreferences = () => {
    localStorage.setItem('preferences', JSON.stringify({displayCount, showComplete, sort}));
  };

  useEffect(() => {
    const localSettings = JSON.parse(localStorage.getItem('preferences'));

    if (localSettings) {
      setDisplayCount(localSettings.displayCount);
      setShowComplete(localSettings.showComplete);
      setSort(localSettings.sort);
    }
  }, []);

  const values = {
    displayCount,
    showComplete,
    sort,
    savePreferences,
    setDisplayCount,
    setShowComplete,
    setSort,
  };

  return (
    <SettingContext.Provider value={values}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;