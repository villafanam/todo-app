import React, { useContext } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Footer from './Components/Footer';
// import Header from './Components/Header';
import RootLayout from './Components/Layout/RootLayout';
import SettingForm from './Components/SettingForm';
import Todo from './Components/Todo';
import { When } from 'react-if';
import { AuthContext } from './Context/Auth';



const App = () => {
  const { loggedIn } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {
          loggedIn &&
          <>
            <Route index element={<Todo />} />
            <Route path="settings" element={<SettingForm />} />
          </>
        }
      </Route>
    )

  );

  return (
    <>
      {/* <Header /> */}
      {/* <Todo />
        <SettingForm /> */}

      <RouterProvider router={router} />
      <Footer />
    </>
  );

}

export default App;
