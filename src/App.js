import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthTemplate from './containers/AuthPage';
import HomeTemplate from './containers/HomePage';
import PageNotFound from "./containers/PageNotFound";
import { routesAuth, routesHome } from "./routes";
import React from "react";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (

          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutAuth = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AuthTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  
  return (
    
    <BrowserRouter >
      <div>
        
      
        <Switch>
          
          {showLayoutHome(routesHome)}
          {showLayoutAuth(routesAuth)}

          <Route path="" component={PageNotFound} />
        </Switch>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
