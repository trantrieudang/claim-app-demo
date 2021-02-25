import LoginPage from '../containers/AuthPage/pages/LoginPage';
import DashboardPage from '../containers/HomePage/pages/DashboardPage';
import ProcessPage from '../containers/HomePage/pages/ProcessPage';

import MyPendingPage from '../containers/HomePage/pages/MyPendingPage';

const routesHome = [
  
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/process",
    component: ProcessPage,
  },
  
  
 
  {
    exact: false,
    path: "/pending",
    component: MyPendingPage,
  },
];

const routesAuth = [
  {
    exact: true,
    path: "/",
    component: LoginPage,
  },
  
];

export { routesHome, routesAuth };