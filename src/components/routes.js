import {createBrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Layout from './Layout';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (<Layout><Home/></Layout>),
    },
    {
      path: "/signup",
      element: (<Layout><PublicRoute><Signup/></PublicRoute></Layout>),
    },
    {
      path: "/login",
      element: (<Layout><PublicRoute><Login/></PublicRoute></Layout>),
    },
    {
      path: "/quiz/:id",
      element: (<Layout><PrivateRoute><Quiz/></PrivateRoute></Layout>),
    },
    {
      path: "/result",
      element: (<Layout><PrivateRoute><Result/></PrivateRoute></Layout>),
    },
]);

export default routes;
