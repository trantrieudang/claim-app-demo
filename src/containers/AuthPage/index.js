import React from "react";
import { Route } from "react-router-dom";


function AuthLayout(props) {
  return (
    <div>
      
      {props.children}
    </div>
  );
}

export default function AuthTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <AuthLayout>
          <Component {...propsComponent} />
        </AuthLayout>
      )}
    />
  );
}