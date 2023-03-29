import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Footer from './Components/Footer';
import Header from './Components/Header';
import RootLayout from './Components/layout/RootLayout';
import SettingForm from './Components/SettingForm';
import Todo from './Components/Todo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Todo />} />
      <Route path="settings" element={<SettingForm />} />
    </Route>
  )
  
);

export default class App extends React.Component {
  render() {
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
}
