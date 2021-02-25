import React from "react";
import { Route } from "react-router-dom";
import MainLayout from './components/MainLayout';




export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <MainLayout>
          <Component {...propsComponent} />
        </MainLayout>
      )}
    />
  );
}