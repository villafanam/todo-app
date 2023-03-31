import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AuthProvider from './Context/Auth';
import SettingProvider from './Context/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AuthProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <SettingProvider>
          <App />
        </SettingProvider>
      </MantineProvider>
    </AuthProvider>

  </React.StrictMode>
);
