import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import SettingProvider from './Context/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <SettingProvider>
        <App />
      </SettingProvider>
    </MantineProvider>
  </React.StrictMode>
);
